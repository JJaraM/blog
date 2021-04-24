import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tagContainer state domain
 */

const selectTagContainerDomain = state => state.tagContainer || initialState;

const makeSelectTagContainer = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate,
  );

const makeTagItems = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.items,
  );

const makeLoading = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.loading,
  );

const makeIsFirstLoading = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.isFirstLoading,
  );

const makeText = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.text,
  );

const makeTagId = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.id,
  );

const makeSearchText = () =>
  createSelector(
    selectTagContainerDomain,
    substate => substate.searchText,
  );

export {
  selectTagContainerDomain,
  makeTagItems,
  makeLoading,
  makeIsFirstLoading,
  makeText,
  makeTagId,
  makeSearchText
};
