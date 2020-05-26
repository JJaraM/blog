/*
 *
 * LatestPostSection reducer
 *
 */
import produce from 'immer';
import { ITEMS_LOADED, FETCH_ERROR } from './constants';
import { LOADING, SUCCESS, ERROR } from 'common/status';

export const initialState = {
  items: [],
  status: LOADING,
  error: null
};

/* eslint-disable default-case, no-param-reassign */
const recomendationsPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ITEMS_LOADED:
        draft.items = action.items;
        draft.status = SUCCESS;
        break;

      case FETCH_ERROR: 
        draft.items = [];
        draft.status = ERROR;
        draft.error = action.error;
        break;
      }

  });

export default recomendationsPostSectionReducer;
