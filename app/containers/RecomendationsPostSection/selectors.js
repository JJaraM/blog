import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLatestPostSectionDomain = state =>
  state.recomendationsPostSection || initialState;

  const makeSelectLatestPostSection = () =>
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate,
  );

const makeLatestPostPage = () =>
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.page,
  );

const makeRecomendationsPostCountItems = () =>
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.countItems,
  );

const makeItems = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.items,
  );

const makeLoading = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.loading,
  );


//export default makeSelectLatestPostSection;
export { 
  selectLatestPostSectionDomain,
  makeLatestPostPage, 
  makeRecomendationsPostCountItems, 
  makeItems,
  makeLoading,
};
