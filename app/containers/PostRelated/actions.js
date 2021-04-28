/*
 *
 * PostRelated actions
 *
 */

import { DEFAULT_ACTION, RETRIEVE, ITEMS, NEXT, PREVIOUS, RESIZE} from './constants';

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

export function next() {
  return {
    type: NEXT
  };
}


export function previous() {
  return {
    type: PREVIOUS
  };
}

export function resize() {
  return {
    type: RESIZE
  }
}
