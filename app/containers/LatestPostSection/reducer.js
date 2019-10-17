/*
 *
 * LatestPostSection reducer
 *
 */
import produce from 'immer';
import { ITEMS_LOADED, RETRIEVE_MORE, CHANGE_TAG } from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
  isFirstLoading: false,
  tagId: 0,
};

/* eslint-disable default-case, no-param-reassign */
const latestPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ITEMS_LOADED:
        draft.items = [...state.items , ...action.items];
        draft.loading = false;
        draft.isFirstLoading = true;
        break;

      case RETRIEVE_MORE:
        draft.page = draft.page + 1;
        break;

      case CHANGE_TAG:
        draft.items = [];
        draft.tagId = action.tagId;
        draft.page = 0;
        break;
    }
  });

export default latestPostSectionReducer;
