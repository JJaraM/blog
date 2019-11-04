import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE } from './constants';
import { itemLoaded } from './actions';
import request from 'utils/request';
import { makeId } from './selectors';
import { api, httpCall } from 'configuration/config';

// Individual exports for testing
export default function* latestPostItemSaga() {
  yield takeLatest(RETRIEVE, getItems);
}
  
export function* getItems() {    
    try {
      const id = yield select(makeId());
      const requestURL = httpCall(api.post, id);
      const items = yield call(request, requestURL);
      yield put(itemLoaded(items));
    } catch (err) {
      yield put(repoLoadingError(err));
    }
  }
  