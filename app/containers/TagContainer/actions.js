/*
 *
 * LatestPostSection actions
 *
 */

import { RETRIEVE, ITEMS_LOADED } from './constants';

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
