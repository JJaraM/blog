import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDeletePostDomain = state => state.deletePost || initialState;

const selectDisable = () =>
  createSelector(
    selectDeletePostDomain,
    substate => substate.disable,
  );


export { 
  selectDeletePostDomain,
  selectDisable 
};
