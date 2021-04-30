import React, { memo } from 'react';
import './style.scss';

function SmallRightContent(props) {
  return (
    <div className="col-lg-4 jjara-small-right-content-sublist">
      { props.children }
    </div>
  );
}

export default memo(SmallRightContent);
