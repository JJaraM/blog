/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSearchable = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.open,
  );


export {
  selectGlobal,
  makeSearchable,
};
