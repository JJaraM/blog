import { RETRIEVE, ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS } from './constants';

export function retrieve() {
  return {
    type: RETRIEVE,
  };
}

export function onNext() {
  return {
    type: ON_NEXT,
  };
}

export function onPrevious() {
  return {
    type: ON_PREVIOUS,
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
