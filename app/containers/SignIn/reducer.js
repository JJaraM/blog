import produce from 'immer';

import { 
  CHANGE_PASSWORD, 
  CHANGE_USERNAME, 
  AUTHENTICATE,
} from './constants';

export const initialState = {
  username: "",
  password: "",
  isAuthenticated: localStorage.getItem('authenticated') !== null
};

/* eslint-disable default-case, no-param-reassign */
const signInReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_PASSWORD:
        draft.password = action.password;
        break;

      case CHANGE_USERNAME:
        draft.username = action.username;
        break;

      case AUTHENTICATE:
        draft.isAuthenticated = action.isAuthenticated;
        break;
    }
  });

export default signInReducer;
