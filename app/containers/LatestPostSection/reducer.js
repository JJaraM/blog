/*
 *
 * LatestPostSection reducer
 *
 */
import produce, { isDraft } from 'immer';
import { RETRIEVE, ITEMS_LOADED} from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
};

/* eslint-disable default-case, no-param-reassign */
const latestPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case RETRIEVE:
        break;

      case ITEMS_LOADED:
        draft.items = action.items;
        break;
    }
  });

export default latestPostSectionReducer;
