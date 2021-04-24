import produce from 'immer';
import {
  ITEMS_LOADED,
  CREATE,
  ADD,
  REMOVE,
  CREATE_DONE,
  SEARCH
} from './constants';

export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
  isFirstLoading: false,
  searchText: '',
  text: '',
  id: 0
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

      case CREATE:
        draft.text = action.text;
        break;

      case SEARCH:
        draft.searchText = action.searchText;
        break;

      case ADD:
        draft.id = action.id;
        break;

      case REMOVE:
        draft.id = action.id;
        break;

      case CREATE_DONE:
        draft.items = [...state.items , ...action.items];
        const half_length = Math.ceil(draft.items.length / 2);
        draft.items = action.items.splice(0,half_length);
        break;
    }
  });

export default tagContainerReducer;
