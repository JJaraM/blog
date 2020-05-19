import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the categoryPage state domain
 */

const selectCategoryPageDomain = state => state.categoryPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CategoryPage
 */

const makeSelectCategoryPage = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate,
  );

const makeSelectedTag = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.id,
  );
  
const makeItems = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.items,
  );

const makePage = () =>
  createSelector(
    selectCategoryPageDomain,
    substate => substate.page,
  );
  

export default makeSelectCategoryPage;
export { selectCategoryPageDomain, makeSelectedTag, makeItems, makePage };
