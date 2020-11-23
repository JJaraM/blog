import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTestimonialSectionDomain = state =>
  state.testimonialSection || initialState;

const getPageNumber = () =>
  createSelector(
    selectTestimonialSectionDomain,
    substate => substate.page,
  );

const getItemsCount = () =>
  createSelector(
    selectTestimonialSectionDomain,
    substate => substate.countItems,
  );

const makeItems = () =>
  createSelector(
    selectTestimonialSectionDomain,
    substate => substate.items,
  );

const makeLoading = () =>
  createSelector(
    selectTestimonialSectionDomain,
    substate => substate.loading,
  );

export {
  selectTestimonialSectionDomain,
  getPageNumber,
  getItemsCount,
  makeItems,
  makeLoading,
};
