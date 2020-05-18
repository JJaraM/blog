import { call, put, select, takeLatest } from 'redux-saga/effects';
import { SEARCH, NEXT, PREVIOUS} from './constants';
import { itemsLoaded, previous } from './actions';
import { api, httpCall } from 'configuration/config';
import request from 'utils/request';
import { makeText, makePage } from './selectors';

export default function* init() {
  yield takeLatest(SEARCH, getItems);
  yield takeLatest(NEXT, getItems);
  yield takeLatest(PREVIOUS, getItems);
}

export function* getItems() {
  try {

    const text = yield select(makeText());
    if (text) {
      const page = yield select(makePage());

      const requestURL = httpCall(api.byTitle, page, 3, text);
      const items = yield call(request, requestURL);

      if (items.length > 0) {
        yield put(itemsLoaded(items));
      } else if (latestPostPage > 0) {
        yield put(previous());
      }
    } else {
      yield put(itemsLoaded([]));
    }
    
  } catch (err) {
    yield put(previous());
  }
}
