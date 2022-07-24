import produce from 'immer';
import {
  RETRIEVE_BY_TAG,
  ERROR,
  REFRESH,
  RETRIEVE_DONE,
  NO_CONTENT,
  LOADING_LATEST_POST,
  FAVOURITE,
} from './constants';

/**
 * Status List:
 * 0 - Loading
 * 1 - Load Complete
 * 2 - Error
 */
export const initialState = {
  page: 0,
  countItems: 3,
  items: [],
  loading: true,
  noContent: false,
  isFirstLoading: false,
  status: 0,
  message: null,
  item: null,
  tagId:
    (localStorage.getItem('Latest-Post-Tag-Selected') !== null) ? parseInt(localStorage.getItem('Latest-Post-Tag-Selected')) : 0,
  favourites: JSON.parse(localStorage.getItem('favourites')),
};

/* eslint-disable default-case, no-param-reassign */
const latestPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RETRIEVE_DONE:
        draft.items = [...state.items, ...action.items];
        draft.loading = false;
        draft.isFirstLoading = true;
        draft.noContent = true;
        draft.status = 1;
        draft.page += 1;
        break;

      case RETRIEVE_BY_TAG:
        draft.items = [];
        draft.tagId = action.tagId;
        draft.page = 0;
        break;

      case NO_CONTENT:
        draft.noContent = false;
        draft.loading = false;
        break;

      case ERROR:
        draft.items = [];
        draft.page = 0;
        draft.status = 2;
        draft.message = action.message;
        break;

      case LOADING_LATEST_POST:
        draft.loading = true;
        break;

      case REFRESH:
        //Check if the event already exist in the array
        const index = state.items.findIndex(x => x.id === action.item.id);

        // Update the existed one
        if (index > -1) {
          action.item.refresh = true;

          return {
            ...state,
            items: [
              ...state.items.slice(0, index),
              action.item,
              ...state.items.slice(index + 1),
            ],
          };
        }
        break;

      case FAVOURITE:
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        const id = action.id;
        const el = document.getElementById(`favourite-${id}`);
        if (favourites === null) {
          favourites = [];
        }
        const indexFavourite = favourites.findIndex(object => object.id === id);
        if (indexFavourite === -1) {
          favourites.push({ id });
          el.classList.add('favourite-selected');
        } else {
          favourites.splice(indexFavourite, 1);
          el.classList.remove('favourite-selected');
        }
        localStorage.setItem('favourites', JSON.stringify(favourites));
        draft.favourites = JSON.parse(localStorage.getItem('favourites'));
        if (favourites.length === 0) {
          draft.tagId = 0;
        }
        break;
    }
  });

export default latestPostSectionReducer;
