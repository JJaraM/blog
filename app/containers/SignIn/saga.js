import { SIGN_IN, SIGN_OUT } from "./constants";
import { takeLatest, select, put } from 'redux-saga/effects';
import { makeSelectPassword, makeSelectUsername } from './selectors';
import { authenticate } from './actions';

export default function* saga() {
  yield takeLatest(SIGN_OUT, onSignOut);
  yield takeLatest(SIGN_IN, onSignIn);
}

export function* onSignIn() {
  const username = yield select(makeSelectUsername());
  const password = yield select(makeSelectPassword());
  if (username === 'jonathan' && password === 'admin') {
    localStorage.setItem('authenticated', true);
    yield put(authenticate(true));
  }
}

export function* onSignOut() {
  localStorage.removeItem('authenticated');
  yield put(authenticate(false));
}
