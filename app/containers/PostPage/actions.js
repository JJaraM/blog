/*
 *
 * PostPage actions
 *
 */

import { ITEM_LOADED, RETRIEVE, EDITABLE, CHANGE_CONTENT, CHANGE_TITLE } from './constants';

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

export function editable() {
  return {
    type: EDITABLE,
  };
}

export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    content,
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}



