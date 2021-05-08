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

export {
  selectCookieBannerDomain,
  grantedPermissions,
  acknowledge
};
