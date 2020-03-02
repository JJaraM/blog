
import React, { memo } from 'react';

function ThirdSection(props) {
  return (
    <div className="third-section">
      { props.children }
    </div>
  );
}

ThirdSection.propTypes = {};

export default memo(ThirdSection);
