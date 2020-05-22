import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, RETRIEVE_MORE, CHANGE_TAG } from './constants';
import { itemsLoaded, error } from './actions';
import { api, httpCall } from 'configuration/config';
import request from 'utils/request';
import { makeLatestPostPage, makeLatestPostCountItems, makeSelectedTag } from './selectors';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';

export default function* init() {
  yield takeLatest([
    RETRIEVE,
    RETRIEVE_MORE,
    CHANGE_TAG
  ], getItems);
}

export function* getItems() {
  const latestPostPage = yield select(makeLatestPostPage());
  const latestPostItems = yield select(makeLatestPostCountItems());
  const tag = yield select(makeSelectedTag());
  const requestURL = httpCall(api.post, latestPostPage, latestPostItems, tag);
  const res = yield call(fetch, requestURL);
  const json = yield call([res, 'json']) ;

  if (res.status === 200) {
    let items = yield call(request, requestURL);
    const isAuthenticated = yield select(makeIsAuthenticated());
    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }
    console.log(items);
    yield put(itemsLoaded(items));
  } else {
    yield put(error(json));
  }

}



