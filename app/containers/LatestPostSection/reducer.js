import produce from 'immer';
import { RETRIEVE_BY_TAG, ERROR, REFRESH, RETRIEVE_DONE, NO_CONTENT } from './constants';

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
  noContent: false,
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
      case RETRIEVE_DONE:
        draft.items = [...state.items, ...action.items];
        draft.loading = false;
        draft.isFirstLoading = true;
        draft.noContent = true;
        draft.status = 1;
        draft.page += 1;
        break;

      case RETRIEVE_BY_TAG:
        draft.items = [];
        draft.tagId = action.tagId;
        draft.page = 0;
        break;

      case NO_CONTENT:
        draft.noContent = false;
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
