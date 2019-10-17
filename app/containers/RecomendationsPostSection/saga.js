import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE } from './constants';
import { itemsLoaded } from './actions';

import request from 'utils/request';
import { makeLatestPostPage, makeRecomendationsPostCountItems } from './selectors';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
}

export function* getItems() {
  const latestPostPage = yield select(makeLatestPostPage());
  const latestPostItems = yield select(makeRecomendationsPostCountItems());
  const tag = 0;
  const requestURL = `https://blog-microservice-post.herokuapp.com/post/mostPopular/${latestPostPage}/${latestPostItems}/${tag}`;
  
  try {
    const items = yield call(request, requestURL);
    
    yield put(itemsLoaded(items));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}


