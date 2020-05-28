/*
 *
 * LatestPostSection reducer
 *
 */
import produce from 'immer';
import { ITEMS_LOADED, RETRIEVE_MORE, CHANGE_TAG, ERROR, REFRESH } from './constants';

/**
 * Status List:
 * 0 - Loading
 * 1 - Load Complete
 * 2 - Error
 */
export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
  isFirstLoading: false,
  tagId: 0,
  status: 0,
  message: null,
  item: null,
};

/* eslint-disable default-case, no-param-reassign */
const latestPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ITEMS_LOADED:
        draft.items = [...state.items , ...action.items];
        draft.loading = false;
        draft.isFirstLoading = true;
        draft.status = 1
        break;

      case RETRIEVE_MORE:
        draft.page = draft.page + 1;
        break;

      case CHANGE_TAG:
        draft.items = [];
        draft.tagId = action.tagId;
        draft.page = 0;
        break;

      case ERROR:
        draft.items = [];
        draft.page = 0;
        draft.status = 2;
        draft.message = action.message;
        break;

      case REFRESH:
        //Check if the event already exist in the array
        const index = state.items.findIndex(x => x.id === action.item.id);
        
        // Update the existed one
        if (index > -1) {
          action.item.refresh = true;
          
          return {
            ...state,
            items: [
              ...state.items.slice(0, index),
              action.item,
              ...state.items.slice(index + 1),
            ]
          }
        }
        break;
    }
  });

export default latestPostSectionReducer;
