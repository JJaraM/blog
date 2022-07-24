import produce from 'immer';
import { FAVOURITE } from './constants';

export const initialState = {
  id: 0
};

/* eslint-disable default-case, no-param-reassign */
const latestPostItemReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case FAVOURITE:
        break;
    }
  });

export default latestPostItemReducer;
