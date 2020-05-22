/*
 *
 * PostRelated reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, RETRIEVE, ITEMS, NEXT, PREVIOUS } from './constants';

export const initialState = {
  tags: [],
  items:[],
  loaded: false,
  page: 0,
};

/* eslint-disable default-case, no-param-reassign */
const postRelatedReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case RETRIEVE:
        draft.loaded = true;
        draft.tags = action.tags;
        break;

      case ITEMS:
        draft.items = action.items;
        break;

      case NEXT:
        draft.page = draft.page + 1;
        break;

      case PREVIOUS:
        if (draft.page > 0) {
          draft.page = draft.page - 1;
        }
        break;
    }
  });

export default postRelatedReducer;
