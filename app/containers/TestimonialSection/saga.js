import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import { itemsLoaded, previous } from './actions';

import request from 'utils/request';
import { makeLatestPostPage, makeRecomendationsTestimonialCountItems } from './selectors';

export default function* init() {
  yield takeLatest(RETRIEVE, getItems);
  yield takeLatest(NEXT, getItems);
  yield takeLatest(PREVIOUS, getItems);
}

export function* getItems() {
  const latestPostPage = yield select(makeLatestPostPage());
  const latestPostItems = yield select(makeRecomendationsTestimonialCountItems());
  const requestURL = `https://blog-microservice-post.herokuapp.com/testimonial/${latestPostPage}/${latestPostItems}`;
  
  try {
    const items = yield call(request, requestURL);
    if (items.length > 0) {
      yield put(itemsLoaded(items));
    } else if (latestPostPage > 0) {
      yield put(previous());
    }
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}



