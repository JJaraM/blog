import React, { memo } from 'react';


function ImageCardInfoContainer(props) {
  return (
    <div className="post-text">
      { props.children }
    </div>
  );
}



export default memo(ImageCardInfoContainer);
