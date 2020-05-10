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

const makeUpdateTitleStatus = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.updateTitleStatus,
  );

// Content
const makeEditContent = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editContent,
  );

const makeUpdateContentStatus = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.updateContentStatus,
  );  

// Image
const makeEditImage = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.editImage,
  );

const makeUpdateImageStatus = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.updateImageStatus,
  );  

export { 
  selectPostPageDomain, 
  makeItem, 
  makeId, 
  makeEditable, 
  makeEditTitle,
  makeEditContent,
  makeRenderDeleteModal,
  makeUpdateTitleStatus,
  makeUpdateContentStatus,
  makeEditImage,
  makeUpdateImageStatus
};
