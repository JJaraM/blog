/*
 *
 * LatestPostSection actions
 *
 */

import { RETRIEVE, ITEMS_LOADED, FETCH_ERROR } from './constants';

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

export function error(error) {
  return {
    type: FETCH_ERROR,
    error
  }
}
