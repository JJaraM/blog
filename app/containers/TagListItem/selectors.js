import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tagListItem state domain
 */

const selectTagListItemDomain = state => state.tagListItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TagListItem
 */

const makeSelectTagListItem = () =>
  createSelector(
    selectTagListItemDomain,
    substate => substate,
  );

export default makeSelectTagListItem;
export { selectTagListItemDomain };
