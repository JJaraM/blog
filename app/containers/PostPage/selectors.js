import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPostPageDomain = state => state.postPage || initialState;

const makeItem = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.item,
  );

const makeId = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.id,
  );

const makeEditable = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editable,
  );

const makeTitle = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.title,
  );

const makeEditTitle = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editTitle,
  );

const makeEditContent = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editContent,
  );

  const makeRenderDeleteModal = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.renderDeleteModal,
  );

export { 
  selectPostPageDomain, 
  makeItem, 
  makeId, 
  makeEditable, 
  makeTitle,
  makeEditTitle,
  makeEditContent,
  makeRenderDeleteModal
};
