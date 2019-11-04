
import React, { memo } from 'react';

function PrimarySection(props) {
  return (
    <div className="main-bg-color">
      { props.children }
    </div>
  );
}

PrimarySection.propTypes = {};

export default memo(PrimarySection);
