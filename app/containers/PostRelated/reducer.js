/*
 *
 * PostRelated reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, RETRIEVE, ITEMS  } from './constants';

export const initialState = {
  tags: [],
  items:[],
  loaded: false,
};

/* eslint-disable default-case, no-param-reassign */
const postRelatedReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;

      case RETRIEVE:
        draft.loaded = true;
        draft.tags = action.tags;
        break;

      case ITEMS:
        draft.items = action.items;
        break;

    }
  });

export default postRelatedReducer;
