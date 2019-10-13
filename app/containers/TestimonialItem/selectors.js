import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testimonialItem state domain
 */

const selectTestimonialItemDomain = state =>
  state.testimonialItem || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestimonialItem
 */

const makeSelectTestimonialItem = () =>
  createSelector(
    selectTestimonialItemDomain,
    substate => substate,
  );

export default makeSelectTestimonialItem;
export { selectTestimonialItemDomain };
