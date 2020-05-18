import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutMeSection state domain
 */

const selectAboutMeSectionDomain = state =>
  state.aboutMeSection || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutMeSection
 */

const makeSelectAboutMeSection = () =>
  createSelector(
    selectAboutMeSectionDomain,
    substate => substate,
  );

export default makeSelectAboutMeSection;
export { selectAboutMeSectionDomain };
