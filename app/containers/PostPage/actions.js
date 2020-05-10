import { 
  ITEM_LOADED, 
  RETRIEVE, 
  EDITABLE, 
  RENDER_DELETE_MODAL,

  //Content
  CHANGE_CONTENT,
  EDIT_TITLE,
  UPDATE_TITLE,
  UPDATE_TITLE_DONE,

  //Title
  CHANGE_TITLE,
  EDIT_CONTENT,
  UPDATE_CONTENT,
  UPDATE_CONTENT_DONE,

   //Image
   CHANGE_IMAGE,
   EDIT_IMAGE,
   UPDATE_IMAGE,
   UPDATE_IMAGE_DONE,

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

export function renderDeleteModal(renderDeleteModal) {
  return {
    type: RENDER_DELETE_MODAL,
    renderDeleteModal
  }
}


//Title
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


// Content
export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    content,
  };
}

export function editContent(editContent) {
  return {
    type: EDIT_CONTENT,
    editContent
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

//Image
export function changeImage(image) {
  return {
    type: CHANGE_IMAGE,
    image,
  };
}

export function editImage(editImage) {
  return {
    type: EDIT_IMAGE,
    editImage
  }
}

export function updateImage() {
  return {
    type: UPDATE_IMAGE
  }
}

export function updateImageDone(updateImageStatus) {
  return {
    type: UPDATE_IMAGE_DONE,
    updateImageStatus
  }
}
