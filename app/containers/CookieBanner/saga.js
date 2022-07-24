import { call, put, select, takeLatest } from 'redux-saga/effects';
import { ACCEPT, DENIED } from './constants';
import { acknowledge } from './actions';
import { httpCall } from 'configuration/config';
import request from 'utils/request';
import { makeTerminalMinimized } from './selectors';

export default function* init() {
  yield takeLatest(ACCEPT, accept);
  yield takeLatest(DENIED, denied);

  const isMinimized = yield select(makeTerminalMinimized());
  const el = document.getElementById('terminal');
  if (isMinimized) {
    el.classList.remove('terminal-window-minimized');
  } else {
    el.classList.add('terminal-window-minimized');
  }
}

export function* accept() {
  localStorage.setItem("Cookie-Access-Acknowledge", "true");
  const requestURL = httpCall('http://ip-api.com/json');
  let response = yield call(request, requestURL);
  localStorage.setItem("Ip-Country", response.contry);
  localStorage.setItem("Ip-Country-Code", response.contryCode);
  localStorage.setItem("Ip-Timezone", response.timezone);
  localStorage.setItem("Ip-Number", response.query);
  yield put(acknowledge());
}

export function* denied() {
  localStorage.removeItem("Cookie-Access-Acknowledge");
  localStorage.removeItem("Ip-Country");
  localStorage.removeItem("Ip-Country-Code");
  localStorage.removeItem("Ip-Timezone");
  localStorage.removeItem("Ip-Number");
  yield put(acknowledge());
}
