/*
 *
 * LatestPostSection reducer
 *
 */
import produce from 'immer';
import { ITEMS_LOADED, RETRIEVE_MORE, CHANGE_TAG, ERROR } from './constants';

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
  message: null
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
    }
  });

export default latestPostSectionReducer;
