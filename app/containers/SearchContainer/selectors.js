import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the searchContainer state domain
 */

const selectSearchContainerDomain = state =>
  state.searchContainer || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SearchContainer
 */

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
export { makeText, selectSearchContainerDomain, makeItems };
