/*
 *
 * LatestPostSection actions
 *
 */

import { 
  RETRIEVE, 
  ITEMS_LOADED,
  CREATE,
  ADD,
  REMOVE,
  CREATE_DONE
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

export function add(id) {
  return {
    type: ADD,
    id
  }
}

export function remove(id) {
  return {
    type: REMOVE,
    id
  }
}

export function create(text) {
  return {
    type: CREATE,
    text
  }
}

export function createDone(items) {
  return {
    type: CREATE_DONE,
    items
  }
}