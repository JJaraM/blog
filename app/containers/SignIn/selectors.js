import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignInDomain = state => state.signIn || initialState;

const makeSelectUsername = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.username,
  );

const makeSelectPassword = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.password,
  );

const makeIsAuthenticated = () =>
  createSelector(
    selectSignInDomain,
    substate => substate.isAuthenticated,
  );

export { 
  selectSignInDomain, 
  makeSelectUsername,
  makeSelectPassword,
  makeIsAuthenticated
};
