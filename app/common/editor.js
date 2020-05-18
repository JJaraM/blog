let currentFullScreenId;

const onClick = (txt, event, onChange) => {

    const myField = document.getElementById('editable-text-id');
    const myValue = txt;

    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }

    //MOZILLA and others
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
            + myValue
            + myField.value.substring(endPos, myField.value.length);
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
    }

    const txtEvent = {
        target : {
          value : myField.value
        }
    };

    onChange(txtEvent);
}

const fullScreen = (id) => {
  currentFullScreenId = id;

  if (id === 'fullscreen') {
    const elem = document.getElementById(id);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
    fullScreenActive();
  }

}
  
const closeFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
  fullScreenInactive(false);
}

function fullScreenActive() {
  let elem = document.getElementById(currentFullScreenId);
  for (var i = 0; i < elem.childNodes.length; i++) {
    const className = elem.childNodes[i].className;
    let el = elem.childNodes[i];
    if (className === 'col-lg-12') {
      el.classList.remove('col-lg-12');
      el.classList.add('col-lg-12-fixable');
    } else if (className === 'col-lg-6') {
      el.classList.add('col-lg-6-fixable');
    }
  }
}

function fullScreenInactive(isFullScreen) {
  
  let itemToChange;
  let cn = undefined;

  if (currentFullScreenId === 'fullscreen') {
    itemToChange = 'id-button-options-container';  
    cn = 'fullscreen';
  }

  let elem = document.getElementById(itemToChange);

  if (elem) {
    if (!isFullScreen) {
      elem.classList.remove(cn);
      elem = document.getElementById(currentFullScreenId);
      for (var i = 0; i < elem.childNodes.length; i++) {
        let el = elem.childNodes[i];
        const c = el.className;
        if (c === "col-lg-12-fixable") {
          el.classList.remove('col-lg-12-fixable');
          el.classList.add('col-lg-12');
        } else if (c === "col-lg-6 col-lg-6-fixable") {
          el.classList.remove('col-lg-6-fixable');
        }
      }
    } else {
      elem.classList.add(cn);
    }
  }
}

document.addEventListener("fullscreenchange", function () {
  fullScreenInactive(document.fullscreen);
}, false);

document.addEventListener("mozfullscreenchange", function () {
  fullScreenInactive(document.mozFullScreen);
}, false);

document.addEventListener("webkitfullscreenchange", function () {
  fullScreenInactive(document.webkitIsFullScreen);
}, false);

document.addEventListener("msfullscreenchange", function () {
  fullScreenInactive(document.msFullscreenElement);
}, false);

export {
    onClick,
    fullScreen,
    closeFullScreen
}
