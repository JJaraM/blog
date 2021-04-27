import React, { memo } from 'react';

import './style.scss';

function TagContainerList(props) {
  return (
    <div id="jjara-tag-container-list" className="jjara-tag-container-list row justify-content-center align-self-center">
      <ul>
        { props.children }
      </ul>
    </div>
  );
}

export default memo(TagContainerList);
