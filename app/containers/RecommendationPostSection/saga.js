import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ON_NEXT, ON_PREVIOUS, RETRIEVE } from './constants';
import { itemsLoaded, error } from './actions';

import request from '../../utils/request';
import { httpCall, api, SORT_BY_VIEWS  } from '../../configuration/config';
import { selectPage } from './selectors';

export default function* init() {
  yield takeLatest([RETRIEVE, ON_NEXT, ON_PREVIOUS], getItems);
}

export function* getItems() {
  const page = yield select(selectPage());

  const totalItems = 6;
  const tag = 0;

  try {
    const requestURL = httpCall(api.post_api.find.all, page, totalItems, tag, SORT_BY_VIEWS);
    const res = yield call(fetch, requestURL);
    const json = yield call([res, 'json']) ;

    if (res.status === 200) {
      let items = yield call(request, requestURL);
      yield put(itemsLoaded(items));
    } else {
      yield put(error(json));
    }
  } catch (e) {
    yield put(error({
      error: e.message
    }));
  }

}


