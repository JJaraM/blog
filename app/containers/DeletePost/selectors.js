import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDeletePostDomain = state => state.deletePost || initialState;

const selectDisable = () =>
  createSelector(
    selectDeletePostDomain,
    substate => substate.disable,
  );

const selectId = () =>
  createSelector(
    selectDeletePostDomain,
    substate => substate.id,
  );  

export { 
  selectDeletePostDomain,
  selectDisable,
  selectId
};
