/*
 *
 * PostRelated actions
 *
 */

import { DEFAULT_ACTION, RETRIEVE, ITEMS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function retrieve(tags) {
  return {
    type: RETRIEVE,
    tags,
  };
}

export function loadItems(items) {
  return {
    type: ITEMS,
    items,
  };
}
