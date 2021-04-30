import produce from 'immer';
import { ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS, ON_REFRESH } from './constants';
import { ERROR, LOADING, SUCCESS } from '../../common/status';


export const initialState = {
  items: [],
  status: LOADING,
  error: null,
  page: 0,
  item: null,
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


      case ON_REFRESH:
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

export default recommendationPostSectionReducer;
