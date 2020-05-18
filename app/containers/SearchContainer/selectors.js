import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSearchContainerDomain = state =>
  state.searchContainer || initialState;

const makeText = () =>
  createSelector(
    selectSearchContainerDomain,
    substate => substate.text,
  );

const makeItems = () =>
  createSelector(
    selectSearchContainerDomain,
    substate => substate.items,
  );

const makePage = () =>
  createSelector(
    selectSearchContainerDomain,
    substate => substate.page,
  );

export { makeText, selectSearchContainerDomain, makeItems, makePage};
