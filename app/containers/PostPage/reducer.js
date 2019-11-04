/*
 *
 * PostPage reducer
 *
 */
import produce from 'immer';
import { RETRIEVE, ITEM_LOADED, EDITABLE, CHANGE_CONTENT, CHANGE_TITLE  } from './constants';

export const initialState = {
  item: null,
  id: null,
  editable: false,
};

/* eslint-disable default-case, no-param-reassign */
const postPageReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case ITEM_LOADED:
        draft.item = action.item;
        break;

      case RETRIEVE:
        draft.id = action.id;
        break;

      case EDITABLE:
        draft.editable = !draft.editable;
        break;

      case CHANGE_CONTENT:
        draft.item.content = action.content;
        break;

      case CHANGE_TITLE:
        draft.item.title = action.title;
        break;
    }
  });

export default postPageReducer;
