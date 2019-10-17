/*
 *
 * PostPage actions
 *
 */

import { ITEM_LOADED, RETRIEVE } from './constants';

export function itemLoaded(item) {
  return {
    type: ITEM_LOADED,
    item,
  };
}

export function retrieve(id) {
  return {
    type: RETRIEVE,
    id,
  };
}


