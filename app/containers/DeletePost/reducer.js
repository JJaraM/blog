import produce from 'immer';
import { DISABLE } from './constants';

export const initialState = {
  disable: true
};

/* eslint-disable default-case, no-param-reassign */
const deletePostReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case DISABLE:
        draft.disable = action.disable;
        break;
    }
  });

export default deletePostReducer;
