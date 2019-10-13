import React, { memo } from 'react';

import './style.scss';

function LoadingContainer(props) {
  
  return (
    <div className="loading">
      { props.children }
    </div>
  );
}

export default memo(LoadingContainer);
