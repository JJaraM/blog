/**
 * Copyright 2021.
 *
 * @author Jonathan Jara Morales
 */
import React, { memo } from 'react';

import './style.scss';
import PropTypes from 'prop-types';

function PostPanelLeftSide(props) {

  if (props.isMinimized) {
    return (
      <div className="jjara-post-panel-left-size-minimize">
        <i className="jjara-post-left-minimize fa fa-plus" onClick={props.onMinimize}/>
      </div>
    );
  }

  return (
    <div className="offset-md-1 col-md-3 col-md-pull-2 small-right-container-fluid">
      <i className="jjara-post-left-minimize fa fa-minus" onClick={props.onMinimize}/>
      { props.children }
    </div>
  );
}

PostPanelLeftSide.propTypes = {
  onMinimize: PropTypes.func,
  isMinimized: PropTypes.bool,
};

export default memo(PostPanelLeftSide);
