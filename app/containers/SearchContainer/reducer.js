/*
 *
 * SearchContainer reducer
 *
 */
import produce from 'immer';
import { SEARCH, ITEMS_LOADED } from './constants';

export const initialState = {
  text: "",
  items: [],
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
    }
  });

export default searchContainerReducer;
