
import React, { memo } from 'react';

import PropTypes from 'prop-types';

function PostHeader(props) {
  const css = props.editable ? 'home_slider_content_container_editable' : '';

  return (
    <div className="parent" >
      <div className="container offset-md-1">
          <div className="img-background-overlay"></div>
          <div className={`home_slider_content_container ${css}`}>
            { props.children }
        </div>
      </div>
    </div>
  );
}

PostHeader.propTypes = {
  editable: PropTypes.bool,
}

PostHeader.defaultProps = {
  editable: false,
}


export default memo(PostHeader);
