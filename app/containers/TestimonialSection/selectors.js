import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTestimonialSectionDomain = state =>
  state.testimonialSection || initialState;

const makeLatestPostPage = () =>
  createSelector(
    selectTestimonialSectionDomain,
    substate => substate.page,
  );

const makeRecomendationsTestimonialCountItems = () =>
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
  makeLatestPostPage, 
  makeRecomendationsTestimonialCountItems, 
  makeItems,
  makeLoading,
};

