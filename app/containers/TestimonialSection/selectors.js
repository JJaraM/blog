import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTestimonialSectionDomain = state => state.testimonialSection || initialState;

const getPageNumber = () =>
  createSelector(
    selectTestimonialSectionDomain,
    state => state.page,
  );

const getItemsCount = () =>
  createSelector(
    selectTestimonialSectionDomain,
    state => state.countItems,
  );

const makeItems = () =>
  createSelector(
    selectTestimonialSectionDomain,
    state => state.items,
  );

const makeLoading = () =>
  createSelector(
    selectTestimonialSectionDomain,
    state => state.loading,
  );

export {
  selectTestimonialSectionDomain,
  getPageNumber,
  getItemsCount,
  makeItems,
  makeLoading,
};
