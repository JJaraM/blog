import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall } from '../../configuration/config';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';
import { getPageNumber, getItemsCount } from './selectors';
import request from 'utils/request';
import { delay } from '@redux-saga/core/effects';

const delayTime = 60000;
const maxRetries = 10;

export default function* init() {
  yield takeLatest([RETRIEVE, NEXT, PREVIOUS], fetchTestimonials);
}

export function* fetchTestimonials() {

  function* callRetry(attempt, requestURL) {
    const retryAttempt = yield attempt + 1;
    console.log('Retry #' + retryAttempt + " for the request " + requestURL + " waiting " + delayTime + "ms ...");

    yield delay(delayTime);
    yield retry(retryAttempt);
  }

  function* retry(attempt) {
    if (attempt < maxRetries) {
      try {
        const page = yield select(getPageNumber());
        const count = yield select(getItemsCount());
        const requestURL = httpCall(api.testimonials, page, count);
        const res = yield call(fetch, requestURL);

        //Ok
        if (res.status === 200) {
          const items = yield call(request, requestURL);
          yield put(itemsLoaded(items));
        }

        //No Content
        if (res.status === 204) {
          yield put(previous());
        }

        //No Content
        if (res.status === 503) {
          yield callRetry(attempt, requestURL);
        }
      } catch (e) {
        const status = e.response.status;
        if (status == 503) {
          yield callRetry(attempt, requestURL);
        }
      }
    }
  }

  yield retry(0);
}



