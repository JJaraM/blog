import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLatestPostSectionDomain = state =>
  state.recommendationPostSection || initialState;

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

const selectPage = () =>
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.page,
  );

export {
  selectLatestPostSectionDomain,
  selectItems,
  selectStatus,
  selectError,
  selectPage
};
