/*
 *
 * CategoryPage actions
 *
 */

import { DEFAULT_ACTION, RETRIEVE, ITEMS, RETRIEVE_MORE, DECREASE } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function retrieve(id) {
  return {
    type: RETRIEVE,
    id
  };
}

export function retrieveMore() {
  return {
    type: RETRIEVE_MORE
  };
}

export function doneItems(items) {
  return {
    type: ITEMS,
    items
  };
}

export function decrease() {
  return {
    type: DECREASE
  };
}
