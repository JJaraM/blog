import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLatestPostSectionDomain = state =>
  state.latestPostSection || initialState;

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

const makeLatestPostCountItems = () =>
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

const makeIsFirstLoading = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.isFirstLoading,
  );

const makeSelectedTag = () => 
  createSelector(
    selectLatestPostSectionDomain,
    substate => substate.tagId,
  );
  
//export default makeSelectLatestPostSection;
export { 
  selectLatestPostSectionDomain,
  makeLatestPostPage, 
  makeLatestPostCountItems, 
  makeItems,
  makeLoading,
  makeIsFirstLoading,
  makeSelectedTag,
};
