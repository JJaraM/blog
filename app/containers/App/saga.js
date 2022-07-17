import { call, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { api, httpCall } from 'configuration/config';

import {
  CREATE_POST,
} from './constants';

export default function* latestPostItemSaga() {
  yield takeLatest(CREATE_POST, sagaCreatePost);
}

export function* sagaCreatePost() {
  try {
    const requestURL = httpCall(api.post);
    const response = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: "TEST" }),
    });

    window.location.href='/post/' + response.id;

  } catch (err) {
    console.log(err);
  }
}
