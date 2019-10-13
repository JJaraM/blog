import { RETRIEVE, ITEMS_LOADED, NEXT, PREVIOUS } from './constants';

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

export function next() {
  return {
    type: NEXT,
  };
}

export function previous() {
  return {
    type: PREVIOUS,
  };
}

