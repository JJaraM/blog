import produce from 'immer';
import { 
  RETRIEVE, 
  ITEM_LOADED, 
  EDITABLE, 
  CHANGE_CONTENT, 
  CHANGE_TITLE,
  EDIT_TITLE,
  EDIT_CONTENT,
  RENDER_DELETE_MODAL,

  UPDATE_TITLE,
  UPDATE_TITLE_DONE,

  UPDATE_CONTENT,
  UPDATE_CONTENT_DONE,
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
  editTitle: false,
  editContent: false,
  renderDeleteModal: false,

  updateTitleStatus: 0,
  updateContentStatus: 0,
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

      case CHANGE_CONTENT:
        draft.item.content = action.content;
        break;

      case CHANGE_TITLE:
        draft.item.title = action.title;
        break;

      case EDIT_TITLE:
        draft.editTitle = action.editTitle;
        draft.updateTitleStatus = 0;
        break;

      case EDIT_CONTENT:
        draft.editContent = action.editContent;
        draft.updateContentStatus = 0;
        break;

      case RENDER_DELETE_MODAL:
        draft.renderDeleteModal = action.renderDeleteModal;
        break;

      case UPDATE_TITLE:
        draft.updateTitleStatus = 1;
        break;
        
      case UPDATE_TITLE_DONE:
        draft.updateTitleStatus = action.updateTitleStatus;
        break;

      case UPDATE_CONTENT:
        draft.updateContentStatus = 1;
        break;

      case UPDATE_CONTENT_DONE:
        draft.updateContentStatus = action.updateContentStatus;
        break;
    }
  });

export default postPageReducer;
