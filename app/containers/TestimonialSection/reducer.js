import produce from 'immer';
import { ITEMS_LOADED, NEXT, PREVIOUS } from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
};

const testimonialSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ITEMS_LOADED:
        draft.items = action.items;
        draft.loading = false;
        break;

      case NEXT:
        draft.page += 1;
        draft.loading = false;
        break;

      case PREVIOUS:
        if (draft.page > 0) {
          draft.page -= 1;
        }
        draft.loading = false;
        break;

      default:
        break;
    }
  });

export default testimonialSectionReducer;
