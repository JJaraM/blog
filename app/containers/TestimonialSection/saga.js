import { put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall, logError } from 'configuration/config';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';
import { getPageNumber, getItemsCount } from './selectors';
import { httpRequest, http } from '../../common/http';

export default function* init() {
  yield takeLatest([RETRIEVE, NEXT, PREVIOUS], fetch);
}

export function* fetch() {
  const page = yield select(getPageNumber());
  const count = yield select(getItemsCount());
  const request = httpCall(api.testimonials, page, count);
  yield http().get(request)
    .on().ok(function*(items) {
      yield put(itemsLoaded(items));
    })
    .on().noContent(function*() {
      yield put(previous());
    }).done();
}
