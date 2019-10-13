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

//export default makeSelectLatestPostSection;
export { 
  selectLatestPostSectionDomain,
  makeLatestPostPage, 
  makeLatestPostCountItems, 
  makeItems,
};
