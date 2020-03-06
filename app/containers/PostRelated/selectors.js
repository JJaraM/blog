import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postRelated state domain
 */

const selectPostRelatedDomain = state => state.postRelated || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostRelated
 */

const makeSelectPostRelated = () =>
  createSelector(
    selectPostRelatedDomain,
    substate => substate,
  );

const makeTags = () =>
  createSelector(
    selectPostRelatedDomain,
    substate => substate.tags,
  );

const makeItemsTags = () =>
  createSelector(
    selectPostRelatedDomain,
    substate => substate.items,
  );

const makeLoading = () =>
  createSelector(
    selectPostRelatedDomain,
    substate => substate.loaded,
  );
  
export { makeSelectPostRelated, selectPostRelatedDomain, makeTags, makeItemsTags, makeLoading };
