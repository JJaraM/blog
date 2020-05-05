import React, { memo } from 'react';

import './style.scss';

function IconContainer(props) {
  return (
    <div className="icon-container">
      { props.children }
    </div>
  );
}

IconContainer.propTypes = {};

export default memo(IconContainer);
