import { 
  ITEM_LOADED, 
  RETRIEVE, 
  EDITABLE, 
  RENDER_DELETE_MODAL,
  EVENT,

  //Title
  CHANGE_TITLE,
  UPDATE_TITLE,

  //Content
  CHANGE_CONTENT,
  UPDATE_CONTENT,

   //Image
   CHANGE_IMAGE,
   UPDATE_IMAGE,

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


export function updateTitle() {
  return {
    type: UPDATE_TITLE
  }
}


// Content
export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    content,
  };
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

export function event(event, value) {
  return {
    type: EVENT,
    event,
    value
  }
}