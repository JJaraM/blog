import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postPageCreate state domain
 */

const selectPostPageCreateDomain = state =>
  state.postPageCreate || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostPageCreate
 */

const makeSelectPostPageCreate = () =>
  createSelector(
    selectPostPageCreateDomain,
    substate => substate,
  );

export default makeSelectPostPageCreate;
export { selectPostPageCreateDomain };
