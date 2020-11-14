import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';
import { api, httpCall } from 'configuration/config';

import request from 'utils/request';
import { makeLatestPostPage, makeRecomendationsTestimonialCountItems } from './selectors';

export default function* init() {
  yield takeLatest([
    RETRIEVE, 
    NEXT, 
    PREVIOUS
  ], fetch);
}

/**
 * Gets the testimonials records, based on the page number and the count of items to retrieve in one single request
 */
export function* fetch() {
  const pageNumber = yield select(makeLatestPostPage());
  const totalOfItems = yield select(makeRecomendationsTestimonialCountItems());
  const url = api.testimonials;
  
  const requestURL = httpCall(url, pageNumber, totalOfItems);
  
  try {
    const items = yield call(request, requestURL);
    if (items.length > 0) {
      yield put(itemsLoaded(items));
    } else if (pageNumber > 0) {
      yield put(previous());
    }
  } catch (err) {
    console.log(err);
    yield put(itemsLoaded([]));
  }
}



