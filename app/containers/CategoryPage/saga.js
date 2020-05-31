import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, RETRIEVE_MORE } from './constants';
import { doneItems, decrease } from './actions';
import { api, httpCall, SORT_BY_VIEWS } from 'configuration/config';
import request from 'utils/request';
import { makeSelectedTag, makePage } from './selectors';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';

// Individual exports for testing
export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
  yield takeLatest(RETRIEVE_MORE, getItems);
}

export function* getItems() {
  try {
    const page = yield select(makePage());
    const tag = yield select(makeSelectedTag());

    const requestURL = httpCall(api.post_api.find.all, page, 3, tag, SORT_BY_VIEWS);
    let items = yield call(request, requestURL);
    const isAuthenticated = yield select(makeIsAuthenticated());

    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }

    if (items && items.length > 0) {
      yield put(doneItems(items));
    } else {
      yield put(decrease())
    }
    
  } catch (err) {
    console.log(err);
  }
}
