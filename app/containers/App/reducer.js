import produce from 'immer';
import { SEARCH, CLOSE, SIGN_IN, SPY, LOADING } from './constants';

// The initial state of the App
export const initialState = {
  renderSearch: false,
  renderSignIn: false,
  renderSpy: false,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SEARCH:
        draft.renderSearch = true;
        break;

      case SIGN_IN:
        draft.renderSignIn = true;
        break;

      case SPY:
        draft.renderSpy = true;
        break;

      case CLOSE:
        draft.renderSearch = false;
        draft.renderSignIn = false;
        draft.renderSpy = false;
        break;

      case LOADING:
        draft.loading = action.loading;
        break;
    }
  });

export default appReducer;
