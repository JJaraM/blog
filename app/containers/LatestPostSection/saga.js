import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, httpCall, SORT_BY_UPDATE_DATE } from 'configuration/config';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';
import { RETRIEVE_BY_TAG, RETRIEVE_LAST_POST } from './constants';
import { error, done } from './actions';
import { makeLatestPostCountItems, makeLatestPostPage, makeSelectedTag } from './selectors';
import { httpRequest } from '../../common/http';

// Stores the count of retries
let retry = { attempt : 0 };

// Indicate what method is being called for each of the events that were executed
export default function* init() {
  // Find the latest post when the user search more data, search data by first time or if change the tag
  yield takeLatest([RETRIEVE_LAST_POST, RETRIEVE_BY_TAG], getItems);
}

export function* getItems() {
  // Get the page number to retrieve
  const page = yield select(makeLatestPostPage());
  // Get the count of items that wants to return
  const count = yield select(makeLatestPostCountItems());
  // Get the tags that wants to be retrieved
  const tag = yield select(makeSelectedTag());
  // Makes an HTTP Request to an external web service using the url defined in the first argument follow parameters used
  // to filter the data that is going to be displayed
  const requestURL = httpCall(api.post_api.find.all, page, count, tag, SORT_BY_UPDATE_DATE);

  // Sends the HTTP Request to the web service
  yield httpRequest().onCall(requestURL);

  // Function that is going to be called when the HTTP Status Code is 200
  yield httpRequest().onOk(function*(items) {
    const isAuthenticated = yield select(makeIsAuthenticated());
    if (!isAuthenticated) {
      items = items.filter(item => !item.tags.includes(182));
    }
    yield put(done(items));
  });

  // Function that is going to be called when the HTTP Status code is 503
  yield httpRequest().onServiceUnavailable(retry,function *() {
    yield getItems();
  });

  // Function that is going to be called when the HTTP status codes is 500
  yield httpRequest().onInternalServerError(function*(res) {
    const json = yield call([res, 'json']);
    yield put(error(json));
  });
}
