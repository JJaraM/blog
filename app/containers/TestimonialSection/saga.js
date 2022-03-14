import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall } from '../../configuration/config';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';
import { getPageNumber, getItemsCount } from './selectors';
import { httpRequest } from '../../common/http';
import { error } from '../LatestPostSection/actions';

let retry = { attempt : 0 };

export default function* init() {
  yield takeLatest([RETRIEVE, NEXT, PREVIOUS], getItems);
}

export function* getItems() {
  const page = yield select(getPageNumber());
  const count = yield select(getItemsCount());
  const requestURL = httpCall(api.testimonials, page, count);

  yield httpRequest().onCall(requestURL);

  yield httpRequest().onOk(function*(items) {
    yield put(itemsLoaded(items));
  });

  yield httpRequest().onNoContent(function*() {
    yield put(previous());
  });

  yield httpRequest().onServiceUnavailable(retry,function *() {
    yield getItems();
  });

  yield httpRequest().onInternalServerError(function*(res) {
    const json = yield call([res, 'json']);
    yield put(error(json));
  });

}
