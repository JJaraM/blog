import produce from 'immer';
import { ITEMS_LOADED } from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
  isFirstLoading: false,
};


/* eslint-disable default-case, no-param-reassign */
const tagContainerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ITEMS_LOADED:
        draft.items = [...state.items , ...action.items];
        draft.loading = false;
        draft.isFirstLoading = true;
        break;
    }
  });

export default tagContainerReducer;
