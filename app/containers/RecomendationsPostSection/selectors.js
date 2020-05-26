import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLatestPostSectionDomain = state =>
  state.recomendationsPostSection || initialState;

const selectItems = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.items,
  );

const selectStatus = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.status,
  );

const selectError = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.error,
  );

export { 
  selectLatestPostSectionDomain,
  selectItems,
  selectStatus,
  selectError,
};
