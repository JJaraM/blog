import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tagListItem state domain
 */

const selectTagListItemMoreDomain = state => state.tagListItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TagListItem
 */

const makeSelectTagListItem = () =>
  createSelector(
    selectTagListItemMoreDomain,
    substate => substate,
  );

export default makeSelectTagListItem;
export { selectTagListItemMoreDomain };
