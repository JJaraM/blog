import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, RETRIEVE_MORE, CHANGE_TAG } from './constants';
import { itemsLoaded } from './actions';
import { api, httpCall } from 'configuration/config';
import request from 'utils/request';
import { makeLatestPostPage, makeLatestPostCountItems, makeSelectedTag } from './selectors';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
  yield takeLatest(RETRIEVE_MORE, getItems);
  yield takeLatest(CHANGE_TAG, getItems);
}

export function* getItems() {
  try {
    const latestPostPage = yield select(makeLatestPostPage());
    const latestPostItems = yield select(makeLatestPostCountItems());
    const tag = yield select(makeSelectedTag());
    const requestURL = httpCall(api.post, latestPostPage, latestPostItems, tag);
    let items = yield call(request, requestURL);
    const isAuthenticated = yield select(makeIsAuthenticated());

    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }
    
    yield put(itemsLoaded(items));
  } catch (err) {
    console.log(err);
    yield put(repoLoadingError(err));
  }
}



