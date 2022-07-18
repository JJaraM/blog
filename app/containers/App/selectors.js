/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeRenderSearch = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.renderSearch,
  );

const makeRenderSignIn = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.renderSignIn,
  );

const makeRenderSpy = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.renderSpy,
  );

const makeLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  )


export {
  selectGlobal,
  makeRenderSearch,
  makeRenderSignIn,
  makeRenderSpy,
  makeLoading,
};
