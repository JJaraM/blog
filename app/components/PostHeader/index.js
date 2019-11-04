
import React, { memo } from 'react';

function PostHeader(props) {
  return (
    <div className="parent" >
      <div className="container">
        <div className="img-background-overlay"></div>
        <div className="home_slider_content_container">
          { props.children }
        </div>
      </div>
    </div>
  );
}

export default memo(PostHeader);
