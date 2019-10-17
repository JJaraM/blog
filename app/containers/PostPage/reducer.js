/*
 *
 * PostPage reducer
 *
 */
import produce from 'immer';
import { RETRIEVE, ITEM_LOADED } from './constants';

export const initialState = {
  item: null,
  id: null,
};

/* eslint-disable default-case, no-param-reassign */
const postPageReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case ITEM_LOADED:
        draft.item = action.item;
        break;

      case RETRIEVE:
        draft.id = action.id;
        break;
    }
  });

export default postPageReducer;
