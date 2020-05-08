import { 
  ITEM_LOADED, 
  RETRIEVE, 
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

export function itemLoaded(item) {
  return {
    type: ITEM_LOADED,
    item,
  };
}

export function retrieve(id) {
  return {
    type: RETRIEVE,
    id,
  };
}

export function editable() {
  return {
    type: EDITABLE,
  };
}

export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    content,
  };
}

export function changeTitle(title) {
  return {
    type: CHANGE_TITLE,
    title,
  };
}

export function editTitle(editTitle) {
  return {
    type: EDIT_TITLE,
    editTitle
  };
}

export function editContent(editContent) {
  return {
    type: EDIT_CONTENT,
    editContent
  }
}

export function renderDeleteModal(renderDeleteModal) {
  return {
    type: RENDER_DELETE_MODAL,
    renderDeleteModal
  }
}

export function updateTitle() {
  return {
    type: UPDATE_TITLE
  }
}

export function updateTitleDone(updateTitleStatus) {
  return {
    type: UPDATE_TITLE_DONE,
    updateTitleStatus
  }
}

export function updateContent() {
  return {
    type: UPDATE_CONTENT
  }
}

export function updateContentDone(updateContentStatus) {
  return {
    type: UPDATE_CONTENT_DONE,
    updateContentStatus
  }
}
