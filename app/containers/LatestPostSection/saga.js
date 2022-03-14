import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall, SORT_BY_UPDATE_DATE } from 'configuration/config';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';
import { CHANGE_TAG, RETRIEVE, RETRIEVE_MORE } from './constants';
import { error, itemsLoaded } from './actions';
import { makeLatestPostCountItems, makeLatestPostPage, makeSelectedTag } from './selectors';
import { httpRequest } from '../../common/http';

let retry = { attempt : 0 };

export default function* init() {
  yield takeLatest([RETRIEVE, RETRIEVE_MORE, CHANGE_TAG], getItems);
}

export function* getItems() {
  const page = yield select(makeLatestPostPage());
  const count = yield select(makeLatestPostCountItems());
  const tag = yield select(makeSelectedTag());
  const requestURL = httpCall(api.post_api.find.all, page, count, tag, SORT_BY_UPDATE_DATE);

  yield httpRequest().onCall(requestURL);

  yield httpRequest().onOk(function*(items) {
    const isAuthenticated = yield select(makeIsAuthenticated());
    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }
    yield put(itemsLoaded(items));
  });

  yield httpRequest().onServiceUnavailable(retry,function *() {
    yield getItems();
  });

  yield httpRequest().onInternalServerError(function*(res) {
    const json = yield call([res, 'json']);
    yield put(error(json));
  });

}
