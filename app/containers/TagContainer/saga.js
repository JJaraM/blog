import { call, put, select, takeLatest } from 'redux-saga/effects';
import { makeId, makeItem } from 'containers/PostPage/selectors';
import { itemLoaded } from 'containers/PostPage/actions';
import { api, httpCall } from 'configuration/config';
import request from 'utils/request';
import { itemsLoaded, createDone } from './actions';
import { makeTagId, makeText, makeTagItems } from './selectors';
import { RETRIEVE, ADD, REMOVE, CREATE } from './constants';
import { previous } from '../TestimonialSection/actions';
import { error } from '../LatestPostSection/actions';
import { httpRequest } from '../../common/http';

let retry = { attempt : 0 };

export default function* init() {
  yield takeLatest(RETRIEVE, sagaRetrieve);
  yield takeLatest(ADD, sagaAdd);
  yield takeLatest(REMOVE, sagaRemove);
  yield takeLatest(CREATE, sagaCreate);
}

export function* sagaRetrieve() {
  const requestURL = httpCall(api.tag.all);

  yield httpRequest().onCall(requestURL);

  yield httpRequest().onOk(function*(items) {
    yield put(itemsLoaded(items));
  });

  yield httpRequest().onServiceUnavailable(retry,function *() {
    yield sagaRetrieve();
  });

  yield httpRequest().onNoContent(function*() {
    yield put(previous());
  });

  yield httpRequest().onInternalServerError(function*(res) {
    const json = yield call([res, 'json']);
    yield put(error(json));
  });

}
//
// export function* sagaRetrieve() {
//
//   function* callRetry(attempt, requestURL) {
//     const retryAttempt = yield attempt + 1;
//     //console.log('Retry #' + retryAttempt + " for the request " + requestURL + " waiting " + delayTime + "ms ...");
//     yield delay(delayTime);
//     yield retry(retryAttempt);
//   }
//
//   function* retry(attempt) {
//     if (attempt < maxRetries) {
//       try {
//         const requestURL = httpCall(api.tag.all);
//         const res = yield call(fetch, requestURL);
//
//         //Ok
//         if (res.status === 200) {
//           const items = yield call(request, requestURL);
//           yield put(itemsLoaded(items));
//         }
//
//         //No Content
//         if (res.status === 204) {
//           yield put(previous());
//         }
//
//         //Service Unavailable
//         if (res.status === 503) {
//           yield callRetry(attempt, requestURL);
//         }
//       } catch (e) {
//         const status = e.response.status;
//         if (status == 503) {
//           yield callRetry(attempt, requestURL);
//         }
//       }
//     }
//   }
//   yield retry(0);
// }

export function* sagaAdd() {
  try {
    const id = yield select(makeTagId());
    const postId = yield select(makeId());
    const requestURL = httpCall(api.post_api.tag.add, postId);
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [id] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const postItem = yield select(makeItem());
    postItem.tags.push(id);

    yield put(itemLoaded(postItem));
  } catch (err) {
    console.log(err);
  }
}

export function* sagaRemove() {
  try {
    const id = yield select(makeTagId());
    const postId = yield select(makeId());
    const requestURL = httpCall(api.post_api.tag.remove, postId);

    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [id] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = yield select(makeTagItems());
    const filterItems = items.filter(item => item.id !== id);
    yield put(createDone(filterItems));
  } catch (err) {
    console.log(err);
  }
}

export function* sagaCreate() {
  try {
    const text = yield select(makeText());
    let requestURL = httpCall(api.tag.create);
    const postId = yield select(makeId());

    // Create the new tag
    const tag = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({ name: text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add the new tag into the current post
    requestURL = httpCall(api.post_api.tag.add, postId);
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [tag.id] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = yield select(makeTagItems());
    tag.posts = [postId];
    items.push(tag);

    const postItem = yield select(makeItem());
    postItem.tags.push(tag.id);

    yield put(createDone(items));
  } catch (err) {
    // yield put(repoLoadingError(err));
    console.log(err);
  }
}
