import { call, put, takeLatest } from 'redux-saga/effects';
import { RETRIEVE } from './constants';
import { itemsLoaded, error } from './actions';
import { api, httpCall, SORT_BY_VIEWS } from 'configuration/config';
import request from 'utils/request';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
}

export function* getItems() {
  const page = 0;
  const totalItems = 6;
  const tag = 0;

  const requestURL = httpCall(api.post_api.find.all, page, totalItems, tag, SORT_BY_VIEWS);
  const res = yield call(fetch, requestURL);
  const json = yield call([res, 'json']) ;

  if (res.status === 200) {
    let items = yield call(request, requestURL);  
    yield put(itemsLoaded(items));
  } else {
    yield put(error(json));
  }
}


