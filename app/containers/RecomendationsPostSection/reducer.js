/*
 *
 * LatestPostSection reducer
 *
 */
import produce, { isDraft } from 'immer';
import { ITEMS_LOADED} from './constants';

export const initialState = {
  page: 0,
  countItems: 8,
  items: [],
  loading: true,
};

/* eslint-disable default-case, no-param-reassign */
const recomendationsPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ITEMS_LOADED:
        draft.items = action.items;
        draft.loading = false;
        break;
    }
  });

export default recomendationsPostSectionReducer;
