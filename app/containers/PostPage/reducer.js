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
} from './constants';

export const initialState = {
  item: null,
  id: null,
  editable: false,
  editTitle: false,
  editContent: false,
  renderDeleteModal: false
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
        break;

      case EDIT_CONTENT:
        draft.editContent = action.editContent;
        break;

      case RENDER_DELETE_MODAL:
        draft.renderDeleteModal = action.renderDeleteModal;
        break;
    }
  });

export default postPageReducer;
