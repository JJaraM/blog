import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall, logError } from 'configuration/config';
import request from 'utils/request';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';
import { getPageNumber, getItemsCount } from './selectors';

export default function* init() {
  yield takeLatest([RETRIEVE, NEXT, PREVIOUS], fetch);
}

/**
 * Fetch {@linkcode api.testimonials}  a collection of testimonials, based on the following parameters:
 * @param page number of page that will be used to retrieve the data.
 * @param countItems count of items to retrieve
 * @return a list of items
 */
export function* fetch() {
  let items = [];
  try {
    const pageNumber = yield select(getPageNumber());
    const itemsCount = yield select(getItemsCount());
    const requestURL = httpCall(api.testimonials, pageNumber, itemsCount);
    items = yield call(request, requestURL);
    if (items.length > 0) {
      yield put(itemsLoaded(items));
    } else if (pageNumber > 0) {
      yield put(previous());
    }
  } catch (err) {
    logError(err);
    items = [];
  } finally {
    yield put(itemsLoaded(items));
  }
}
