import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { api, httpCall } from 'configuration/config';
import { DELETE } from './constants';
import { selectId } from './selectors';

export default function* saga() {
  yield takeLatest(DELETE, sagaDelete);
}

export function* sagaDelete() {
  try {
    const id = yield select(selectId());
    const requestURL = httpCall(api.post, id);

    yield call(request, requestURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    window.location.href='/';
  } catch (err) {

    console.log(err);
  }
}
