import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLatestPostSectionDomain = state => state.latestPostSection || initialState;

const makeLatestPostPage = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.page,
  );

const makeLatestPostCountItems = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.countItems,
  );

const makeItems = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.items,
  );

const makeLoading = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.loading,
  );

const makeIsFirstLoading = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.isFirstLoading,
  );

const makeSelectedTag = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.tagId,
  );

const makeStatus = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.status,
  );

const makeMessage = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.message,
  );

export {
  selectLatestPostSectionDomain,
  makeLatestPostPage,
  makeLatestPostCountItems,
  makeItems,
  makeLoading,
  makeIsFirstLoading,
  makeSelectedTag,
  makeStatus,
  makeMessage,
};
