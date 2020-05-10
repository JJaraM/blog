import produce from 'immer';
import { DISABLE, DELETE } from './constants';

export const initialState = {
  disable: true,
  id: 0,
};

/* eslint-disable default-case, no-param-reassign */
const deletePostReducer = (state = initialState, action) =>
  produce(state, draft  => {
    switch (action.type) {
      case DISABLE:
        draft.disable = action.disable;
        break;

      case DELETE:
        draft.id = action.id;
        break;
    }
  });

export default deletePostReducer;
