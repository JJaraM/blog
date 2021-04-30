import { RETRIEVE, ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS, ON_REFRESH } from './constants';

export function retrieve() {
  return {
    type: RETRIEVE,
  };
}

export function next() {
  return {
    type: ON_NEXT,
  };
}

export function previous() {
  return {
    type: ON_PREVIOUS,
  };
}

export function refresh(item) {
  return {
    type: ON_REFRESH,
    item,
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
