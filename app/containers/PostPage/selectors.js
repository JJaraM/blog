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

const makeUpdateTitleStatus = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.updateTitleStatus,
  );

const makeUpdateContentStatus = () =>
  createSelector(
    selectPostPageDomain,
    substate => substate.updateContentStatus,
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
  makeUpdateContentStatus
};
