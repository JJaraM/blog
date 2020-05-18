/*
 *
 * SearchContainer reducer
 *
 */
import produce from 'immer';
import { SEARCH, ITEMS_LOADED, NEXT, PREVIOUS } from './constants';

export const initialState = {
  text: "",
  items: [],
  page: 0,
};

/* eslint-disable default-case, no-param-reassign */
const searchContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH:
        draft.text = action.text;
        break;
      
      case ITEMS_LOADED:
        draft.items = action.items;
        break;

      case NEXT:
        draft.page = draft.page + 1;
        draft.loading = false;
        break;
  
      case PREVIOUS:
        if (draft.page > 0) {
          draft.page = draft.page - 1;
        }
        draft.loading = false;
        break;
    }
  });

export default searchContainerReducer;
