import produce from 'immer';

import { 
  RETRIEVE, 
  ITEM_LOADED, 
  EDITABLE, 
  RENDER_DELETE_MODAL,

  // Title
  CHANGE_TITLE,
  EDIT_TITLE,
  UPDATE_TITLE,
  UPDATE_TITLE_DONE,

  // Content
  CHANGE_CONTENT, 
  EDIT_CONTENT,
  UPDATE_CONTENT,
  UPDATE_CONTENT_DONE,

  // Image
  CHANGE_IMAGE, 
  EDIT_IMAGE,
  UPDATE_IMAGE,
  UPDATE_IMAGE_DONE,

} from './constants';

/**
 * Update status
 * 0 - No action
 * 1 - In Progress
 * 2 - Done
 * 3 - Error
 */
export const initialState = {
  item: null,
  id: null,
  editable: false,
  renderDeleteModal: false,

  // Title 
  editTitle: false,
  updateTitleStatus: 0,

  // Content
  editContent: false,
  updateContentStatus: 0,

  // Image
  editImage: false,
  updateImageStatus: 0,

};

/* eslint-disable default-case, no-param-reassign */
const postPageReducer = (state = initialState, action) =>
  produce(state,  draft => {
    switch (action.type) {
      case ITEM_LOADED:
        draft.item = action.item;
        break;

      case RETRIEVE:
        draft.id = action.id;
        break;

      case EDITABLE:
        draft.editable = !draft.editable;
        break;

      case RENDER_DELETE_MODAL:
        draft.renderDeleteModal = action.renderDeleteModal;
        break;
  
      // Title
      case CHANGE_TITLE:
        draft.item.title = action.title;
        break;

      case EDIT_TITLE:
        draft.editTitle = action.editTitle;
        draft.updateTitleStatus = 0;
        break;

      case UPDATE_TITLE:
        draft.updateTitleStatus = 1;
        break;

      case UPDATE_TITLE_DONE:
        draft.updateTitleStatus = action.updateTitleStatus;
        break;

      // Content
      case CHANGE_CONTENT:
        draft.item.content = action.content;
        break;

      case EDIT_CONTENT:
        draft.editContent = action.editContent;
        draft.updateContentStatus = 0;
        break;

      case UPDATE_CONTENT:
        draft.updateContentStatus = 1;
        break;

      case UPDATE_CONTENT_DONE:
        draft.updateContentStatus = action.updateContentStatus;
        break;

      // Image
      case CHANGE_IMAGE:
        console.log('change image');
        draft.item.image = action.image;
        break;

      case EDIT_IMAGE:
        draft.editImage = action.editImage;
        draft.updateImageStatus = 0;
        break;

      case UPDATE_IMAGE:
        draft.updateImageStatus = 1;
        break;

      case UPDATE_IMAGE_DONE:
        draft.updateImageStatus = action.updateImageStatus;
        break;
    }
  });

export default postPageReducer;
