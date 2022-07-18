import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCookieBannerDomain = state => state.cookieBanner || initialState;

const grantedPermissions = () =>
  createSelector(
    selectCookieBannerDomain,
    substate => substate.grantedPermissions,
  );

const acknowledge = () =>
  createSelector(
    selectCookieBannerDomain,
    substate => substate.acknowledge,
  );

const commandResult = () =>
  createSelector(
    selectCookieBannerDomain,
    substate => substate.commandResult,
  );

export { selectCookieBannerDomain, grantedPermissions, acknowledge, commandResult };
