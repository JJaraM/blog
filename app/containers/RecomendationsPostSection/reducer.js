/*
 *
 * LatestPostSection reducer
 *
 */
import produce, { isDraft } from 'immer';
import { RETRIEVE, ITEMS_LOADED} from './constants';

export const initialState = {
  page: 0,
  countItems: 8,
  items: [],
};

/* eslint-disable default-case, no-param-reassign */
const recomendationsPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case RETRIEVE:
        break;

      case ITEMS_LOADED:
        draft.items = action.items;
        break;
    }
  });

export default recomendationsPostSectionReducer;
