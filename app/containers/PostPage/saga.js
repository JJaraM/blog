import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { api, httpCall, isInfitiveLoading } from 'configuration/config';

import { 
  RETRIEVE,
  UPDATE_TITLE,
  UPDATE_CONTENT,
  UPDATE_IMAGE,
} from './constants';

import { 
  itemLoaded, 
  updateTitleDone,
  updateContentDone,
  updateImageDone,
} from './actions';

import { 
  makeId, 
  makeItem
} from './selectors';

export default function* latestPostItemSaga() {
  yield takeLatest(RETRIEVE, sagaRetrieve);
  yield takeLatest(UPDATE_TITLE, sagaUpdateTitle);
  yield takeLatest(UPDATE_CONTENT, sagaUpdateContent);
  yield takeLatest(UPDATE_IMAGE, sagaUpdateImage);
}
  
export function* sagaRetrieve() {    
  try {
    const id = yield select(makeId());
    const requestURL = httpCall(api.post, id);
    const items = yield call(request, requestURL);

    if (isInfitiveLoading()) {
      yield put(itemLoaded(null));
    } else {
      yield put(itemLoaded(items));
    }

  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}
  
export function* sagaUpdateTitle() {    
  try {
    const id = yield select(makeId());
    const item = yield select(makeItem());
    const requestURL = httpCall(api.updateTitle, id);

    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ title: item.title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(updateTitleDone(2));
  } catch (err) {
    yield put(updateTitleDone(3));
  }
}

export function* sagaUpdateContent() {    
  try {
    const id = yield select(makeId());
    const item = yield select(makeItem());
    const requestURL = httpCall(api.updateContent, id);
    
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ content: item.content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(updateContentDone(2));
  } catch (err) {
    yield put(updateContentDone(3));
  }
}

export function* sagaUpdateImage() {    
  try {
    const id = yield select(makeId());
    const item = yield select(makeItem());
    const requestURL = httpCall(api.updateImage, id);
    
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ image: item.image }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(updateImageDone(2));
  } catch (err) {
    yield put(updateImageDone(3));
  }
}

