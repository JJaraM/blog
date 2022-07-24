import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { api, httpCall, isInfitiveLoading } from 'configuration/config';

import {
  RETRIEVE,
  UPDATE_TITLE,
  UPDATE_CONTENT,
  UPDATE_IMAGE,

  EVENT_CHANGE_TITLE_STATUS,
  EVENT_CHANGE_IMAGE_STATUS,
  EVENT_CHANGE_CONTENT_STATUS,
} from './constants';

import {
  itemLoaded,
  updateTitleDone,
  updateContentDone,
  updateImageDone,
  event,
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
    let items = yield call(request, requestURL);
    let geoLocation = yield call(request, "https://geolocation-db.com/json/");

    console.log(geoLocation['IPv4']);

    if (isInfitiveLoading()) {
      items = null;
    }

    yield put(itemLoaded(items));

  } catch (err) {
    yield put(repoLoadingError(err));

  } finally {

  }
}

export function* sagaUpdateTitle() {
  let status = 2;

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
  } catch (err) {
    status = 3;

  } finally {
    yield put(event(EVENT_CHANGE_TITLE_STATUS, status));
  }
}

export function* sagaUpdateContent() {
  let status = 2;

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

  } catch (err) {
    status = 3;

  } finally {
    yield put(event(EVENT_CHANGE_CONTENT_STATUS, status));
  }
}

export function* sagaUpdateImage() {
  let status = 2;

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
  } catch (err) {
    status = 3;

  } finally {
    yield put(event(EVENT_CHANGE_IMAGE_STATUS, status));
  }
}

