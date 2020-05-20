import { call, put, select, takeLatest } from 'redux-saga/effects';

import { 
  RETRIEVE,
  ADD,
  REMOVE,
  CREATE
} from './constants';

import { 
  makeTagId, 
  makeText,
  makeTagItems
} from './selectors';

import { 
  makeId,
  makeItem
} from 'containers/PostPage/selectors';

import { 
  itemLoaded
} from 'containers/PostPage/actions';

import { itemsLoaded, createDone} from './actions';
import { api, httpCall, isInfitiveLoading } from 'configuration/config';

import request from 'utils/request';

export default function* init() {
  yield takeLatest(RETRIEVE, sagaRetrieve);
  yield takeLatest(ADD, sagaAdd);
  yield takeLatest(REMOVE, sagaRemove);
  yield takeLatest(CREATE, sagaCreate);
}

export function* sagaRetrieve() {
  try {
    
    const requestURL = httpCall(api.tag.all);
    const items = yield call(request, requestURL);
    yield put(itemsLoaded(items));
  } catch (err) {
    console.log(err);
  }
}

export function* sagaAdd() {
  try {
    
    const id = yield select(makeTagId());
    const postId = yield select(makeId());
    const requestURL = httpCall(api.post_api.tag.add, postId);
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [ id ] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const postItem = yield select(makeItem());
    postItem.tags.push(id);

    yield put(itemLoaded(postItem));

  } catch (err) {
    console.log(err);
  }
}

export function* sagaRemove() {
  try {
   
    const id = yield select(makeTagId());
    const postId = yield select(makeId());
    const requestURL = httpCall(api.post_api.tag.remove, postId);
  
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [ id ] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = yield select(makeTagItems());
    const filterItems = items.filter(item => item.id !== id);
    yield put(createDone(filterItems));

  } catch (err) {
    console.log(err);
  }
}

export function* sagaCreate() {
  try {
    const text = yield select(makeText());
    let requestURL = httpCall(api.tag.create);
    const postId = yield select(makeId());

    // Create the new tag
    const tag = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify({ name: text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add the new tag into the current post
    requestURL = httpCall(api.post_api.tag.add, postId);
    yield call(request, requestURL, {
      method: 'PUT',
      body: JSON.stringify({ tags: [ tag.id ] }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = yield select(makeTagItems());
    tag.posts = [ postId ];
    items.push(tag);

    const postItem = yield select(makeItem());
    postItem.tags.push(tag.id);
    
    yield put(createDone(items));

  } catch (err) {
    //yield put(repoLoadingError(err));
    console.log(err);
  }
}
