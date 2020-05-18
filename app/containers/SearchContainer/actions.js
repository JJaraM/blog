import { 
  SEARCH, 
  ITEMS_LOADED,
  NEXT,
  PREVIOUS
} from './constants';

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

export function next() {
  return {
    type: NEXT
  } 
}


export function previous() {
  return {
    type: PREVIOUS
  } 
}