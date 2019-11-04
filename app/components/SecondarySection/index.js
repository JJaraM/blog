import React, { memo } from 'react';

function SecondarySection(props) {
  return (
    <div className="secondary-bg-color">
      { props.children }
    </div>
  );
}

SecondarySection.propTypes = {};

export default memo(SecondarySection);
