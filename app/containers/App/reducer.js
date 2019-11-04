import produce from 'immer';
import { OPEN, CLOSE } from './constants';

// The initial state of the App
export const initialState = {
  open: false
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case OPEN:
        draft.open = true;
        break;

      case CLOSE:
        draft.open = false;
        break;
    }
  });

export default appReducer;
