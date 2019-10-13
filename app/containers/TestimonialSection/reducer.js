import produce from 'immer';
import { RETRIEVE, ITEMS_LOADED, NEXT, PREVIOUS } from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
};

/* eslint-disable default-case, no-param-reassign */
const testimonialSectionReducer = (state = initialState, action) =>
produce(state, draft => {
  switch (action.type) {

    case RETRIEVE:
      break;

    case ITEMS_LOADED:
      draft.items = action.items;
      draft.loading = false;
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

export default testimonialSectionReducer;
