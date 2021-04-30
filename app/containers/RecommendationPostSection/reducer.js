import produce from 'immer';
import { ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS } from './constants';
import { ERROR, LOADING, SUCCESS } from '../../common/status';


export const initialState = {
  items: [],
  status: LOADING,
  error: null,
  page: 0,
};

/* eslint-disable default-case, no-param-reassign */
const recommendationPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ON_NEXT:
        draft.page = draft.page + 1;
        break;

      case ON_PREVIOUS:
        if (draft.page > 0) {
          draft.page = draft.page - 1;
        }
        break;

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

export default recommendationPostSectionReducer;
