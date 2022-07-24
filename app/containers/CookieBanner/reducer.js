import produce from 'immer';
import { ACKNOWLEDGE, COMMAND_RESULT, TOGGLE } from './constants';

export const initialState = {
  acknowledge: localStorage.getItem('Cookie-Access-Acknowledge'),
  grantedPermissions:
    localStorage.getItem('Cookie-Access-Acknowledge') !== undefined &&
    localStorage.getItem('Cookie-Access-Acknowledge') === 'true',
  cookieResult: '',
  terminalMinimized:
    localStorage.getItem('Terminal-Minimized') !== undefined ? JSON.parse(localStorage.getItem('Terminal-Minimized')) : true,
};

/* eslint-disable default-case, no-param-reassign */
const cookieBannerReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ACKNOWLEDGE:
        draft.acknowledge = true;
        break;

      case TOGGLE:
        draft.terminalMinimized = !draft.terminalMinimized;
        const el = document.getElementById('terminal');
        if (draft.terminalMinimized) {
          el.classList.remove('terminal-window-minimized');
          localStorage.setItem('Terminal-Minimized', 'true');
        } else {
          el.classList.add('terminal-window-minimized');
          localStorage.setItem('Terminal-Minimized', 'false');
        }
        break;
    }
  });

export default cookieBannerReducer;
