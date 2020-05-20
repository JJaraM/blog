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

const makeRenderDeleteModal = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.renderDeleteModal,
  );

// Title
const makeEditTitle = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editTitle,
  );

// Content
const makeEditContent = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editContent,
  );

// Image
const makeEditImage = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editImage,
  );

const makeEvents = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.eventValue,
  );  

export { 
  selectPostPageDomain, 
  makeItem, 
  makeId, 
  makeEditable, 
  makeEditTitle,
  makeEditContent,
  makeRenderDeleteModal,
  makeEditImage,
  makeEvents
};
