import produce from 'immer';
import { ACKNOWLEDGE, COMMAND_RESULT } from './constants';

export const initialState = {
  acknowledge: localStorage.getItem('Cookie-Access-Acknowledge'),
  grantedPermissions:
    localStorage.getItem('Cookie-Access-Acknowledge') !== undefined &&
    localStorage.getItem('Cookie-Access-Acknowledge') === 'true',
  cookieResult: '',
};

/* eslint-disable default-case, no-param-reassign */
const cookieBannerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACKNOWLEDGE:
        draft.acknowledge = true;
        break;
    }
  });

export default cookieBannerReducer;
