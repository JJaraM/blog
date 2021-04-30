import React, { memo } from 'react';


function ImageCardDivider(props) {
  return (
    <div className="col-lg-6">
      { props.children }
    </div>
  );
}



export default memo(ImageCardDivider);
