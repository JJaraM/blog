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

const makeLoadingLatestPost = () =>
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

const makeNoContent = () =>
  createSelector(
    selectLatestPostSectionDomain,
    state => state.noContent,
  );

export {
  selectLatestPostSectionDomain,
  makeLatestPostPage,
  makeLatestPostCountItems,
  makeItems,
  makeLoadingLatestPost,
  makeIsFirstLoading,
  makeSelectedTag,
  makeStatus,
  makeMessage,
  makeNoContent,
};
