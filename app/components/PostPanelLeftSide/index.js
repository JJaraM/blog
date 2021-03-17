/**
 * Copyright 2021.
 *
 * @author Jonathan Jara Morales
 */
import React, { memo } from 'react';

import './style.scss';

function PostPanelLeftSide(props) {
  return (
    <div className="offset-md-1 col-md-3 col-md-pull-2 small-right-container-fluid">
      {props.children}
    </div>
  );
}

export default memo(PostPanelLeftSide);
