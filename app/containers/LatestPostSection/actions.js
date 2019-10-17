import { RETRIEVE, ITEMS_LOADED, RETRIEVE_MORE, CHANGE_TAG } from './constants';

export function retrieve() {
  return {
    type: RETRIEVE,
  };
}

export function retrieveMore() {
  return {
    type: RETRIEVE_MORE,
  };
}


export function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  }
}

export function changeTag(tagId) {
  return {
    type: CHANGE_TAG,
    tagId,
  }
}




