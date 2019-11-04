import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH } from './constants';
import { itemsLoaded } from './actions';
import { api, httpCall } from 'configuration/config';
import request from 'utils/request';
import { makeText } from './selectors';

export default function* init() {
  yield takeLatest(SEARCH, getItems);
}

export function* getItems() {
  try {
    //const latestPostPage = yield select(makeLatestPostPage());
    //const latestPostItems = yield select(makeLatestPostCountItems());
    const text = yield select(makeText());
    if (text) {
      const requestURL = httpCall(api.byTitle, 0, 3, text);
      const items = yield call(request, requestURL);
      yield put(itemsLoaded(items));
    } else {
      yield put(itemsLoaded([]));
    }
    
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}
