import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE, NEXT, PREVIOUS } from './constants';
import request from 'utils/request';
import { makeTags, makePage } from './selectors';
import { api, httpCall } from 'configuration/config';
import { loadItems, previous } from './actions';
import { makeId} from 'containers/PostPage/selectors';

export default function* latestPostItemSaga() {
  yield takeLatest([
    RETRIEVE,
    NEXT,
    PREVIOUS
  ], getItems);
}

export function* getItems() {    
    try {
      const id = yield select(makeId());
      const tags = yield select(makeTags());
      const page = yield select(makePage());
      const requestURL = httpCall(api.post, page, 3, tags.join(","));
      let item = yield call(request, requestURL);
      
      if (item.length > 0) {
        item = item.filter(i => i.id != id)
        yield put(loadItems(item));

      } else if (page > 0) {
        yield put(previous());
      }

    } catch (err) {
      yield put(previous());
    }
  }
  