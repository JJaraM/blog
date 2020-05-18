import { call, put, select, takeLatest } from 'redux-saga/effects';
import { RETRIEVE } from './constants';
import request from 'utils/request';
import { makeTags } from './selectors';
import { api, httpCall } from 'configuration/config';
import { loadItems } from './actions';
import { makeId } from 'containers/PostPage/selectors';

// Individual exports for testing
export default function* latestPostItemSaga() {
  yield takeLatest(RETRIEVE, getItems);
}
  
// check if an element exists in array using a comparer function
// comparer : function(currentElement)
Array.prototype.inArray = function(comparer) { 
  for(var i=0; i < this.length; i++) { 
      if(comparer(this[i])) return true; 
  }
  return false; 
}; 

// adds an element to the array if it does not already exist using a comparer 
// function
Array.prototype.pushIfNotExist = function(element, comparer) { 
  if (!this.inArray(comparer)) {
      this.push(element);
  }
}; 

export function* getItems() {    
    try {
      const id = yield select(makeId());
      const tags = yield select(makeTags());
      let items = [];
      const size = tags.length;
      let i = 0;

      while (i < size) {
        const tag = tags[i];
        const requestURL = httpCall(api.post, 0, 10, tag);
        const item = yield call(request, requestURL);
        item.forEach(element => {
          items.pushIfNotExist(element, function(e) { 
            return e.id === element.id && element.id != id; 
          });
        });
        i++;
      }

      items = items.filter(item => item.id != id);
      yield put(loadItems(items));
    } catch (err) {
      
      //yield put(repoLoadingError(err));
    }
  }
  