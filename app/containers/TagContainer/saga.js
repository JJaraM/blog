import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE } from './constants';
import { itemsLoaded } from './actions';

import request from 'utils/request';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
}

export function* getItems() {
  try {
    const requestURL = `https://blog-microservice-tag.herokuapp.com/tag/all`;
    const items = yield call(request, requestURL);
    yield put(itemsLoaded(items));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
