import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postPage state domain
 */

const selectPostPageDomain = state => state.postPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostPage
 */

const makeItem = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.item,
  );

const makeId = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.id,
  );

export { selectPostPageDomain, makeItem, makeId };
