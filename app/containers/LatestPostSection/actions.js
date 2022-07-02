import {
  RETRIEVE,
  ITEMS_LOADED,
  CHANGE_TAG,
  ERROR,
  REFRESH
} from './constants';

export function retrieve() {
  return {
    type: RETRIEVE,
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

export function error(message) {
  return {
    type: ERROR,
    message
  }
}

export function refresh(item) {
  return {
    type: REFRESH,
    item
  }
}



