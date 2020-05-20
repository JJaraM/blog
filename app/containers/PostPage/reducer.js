import produce from 'immer';

import { 
  RETRIEVE, 
  ITEM_LOADED, 
  EDITABLE, 
  RENDER_DELETE_MODAL,

  // Title
  CHANGE_TITLE,
  UPDATE_TITLE,
  UPDATE_TITLE_DONE,

  // Content
  CHANGE_CONTENT, 
  EDIT_CONTENT,
  UPDATE_CONTENT,
  UPDATE_CONTENT_DONE,

  // Image
  CHANGE_IMAGE, 
  UPDATE_IMAGE,
  UPDATE_IMAGE_DONE,

  EVENT
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

  eventValue: [],
  event: null,
  value: null,

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
        draft.item.image = action.image;
        break;

      case UPDATE_IMAGE:
        draft.updateImageStatus = 1;
        break;

      case UPDATE_IMAGE_DONE:
        draft.updateImageStatus = action.updateImageStatus;
        break;

      case EVENT:
    
        const event = {
          event: action.event, // For example: Change, Edit, Update, Update Done
          value: action.value, // For example a text or a boolean value
        };

        console.log(event);
        
        //Add a new value in the array
        let result = {
          ...state,
          eventValue: [
            ...state.eventValue, 
            event,  
            ...state.eventValue
          ],
        };
        
        //Check if the event already exist in the array
        const index = state.eventValue.findIndex(x => x.event === action.event);
        
        // Update the existed one
        if (index > -1) {
          result = {
            ...state,
            eventValue: [
              ...state.eventValue.slice(0, 0),
              event,
              ...state.eventValue.slice(0, index + 1),
            ]
          }
        }


        return result;
    }
  });

export default postPageReducer;
