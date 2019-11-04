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

const makeEditable = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editable,
  );

const makeTitle = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.title,
  );

export { selectPostPageDomain, makeItem, makeId, makeEditable, makeTitle };
