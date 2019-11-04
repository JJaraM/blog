import { SEARCH, ITEMS_LOADED } from './constants';

export function search(text) {
  return {
    type: SEARCH,
    text,
  };
}

export function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  };
}


