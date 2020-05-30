import { call, put, select, takeLatest, take } from 'redux-saga/effects';
import { RETRIEVE, RETRIEVE_MORE, CHANGE_TAG } from './constants';
import { itemsLoaded, error } from './actions';
import { api, httpCall, SORT_BY_UPDATE_DATE, socket } from 'configuration/config';
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
  const requestURL = httpCall(api.post_api.find.all, latestPostPage, latestPostItems, tag, SORT_BY_UPDATE_DATE);
  const res = yield call(fetch, requestURL);
  const json = yield call([res, 'json']) ;

  if (res.status === 200) {
    let items = yield call(request, requestURL);
    const isAuthenticated = yield select(makeIsAuthenticated());
    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }
    yield put(itemsLoaded(items));
  } else {
    yield put(error(json));
  }

}



