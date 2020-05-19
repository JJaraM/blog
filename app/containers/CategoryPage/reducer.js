/*
 *
 * CategoryPage reducer
 *
 */
import produce from 'immer';
import { ITEMS, RETRIEVE, RETRIEVE_MORE, DECREASE } from './constants';

export const initialState = {
  id: 0,
  items: [],
  page: 0,
};

/* eslint-disable default-case, no-param-reassign */
const categoryPageReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case RETRIEVE:
        draft.id = action.id;
        draft.items = [];
        draft.page = 0;
        break;

      case RETRIEVE_MORE:
        draft.page = draft.page + 1;
        break;

      case ITEMS:
        draft.items = [...state.items , ...action.items];
        break;

      case DECREASE:
        draft.page = draft.page - 1;
        break;
    }
  });

export default categoryPageReducer;
