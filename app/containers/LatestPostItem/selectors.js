import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the latestPostItem state domain
 */

const selectLatestPostItemDomain = state =>
  state.latestPostItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LatestPostItem
 */

const makeSelectLatestPostItem = () =>
  createSelector(
    selectLatestPostItemDomain,
    substate => substate,
  );

export default makeSelectLatestPostItem;
export { selectLatestPostItemDomain };
