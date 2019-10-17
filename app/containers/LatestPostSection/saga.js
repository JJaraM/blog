import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, RETRIEVE_MORE, CHANGE_TAG } from './constants';
import { itemsLoaded } from './actions';

import request from 'utils/request';
import { makeLatestPostPage, makeLatestPostCountItems, makeSelectedTag } from './selectors';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
  yield takeLatest(RETRIEVE_MORE, getItems);
  yield takeLatest(CHANGE_TAG, getItems);
}

export function* getItems() {
  const latestPostPage = yield select(makeLatestPostPage());
  const latestPostItems = yield select(makeLatestPostCountItems());
  const tag = yield select(makeSelectedTag());
  const requestURL = `https://blog-microservice-post.herokuapp.com/post/${latestPostPage}/${latestPostItems}/${tag}`;
  
  try {
    const items = yield call(request, requestURL);
    yield put(itemsLoaded(items));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}



