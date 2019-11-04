import React, { memo } from 'react';

function DividerLine() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="elementor-divider">
        <div className="elementor-divider-separator"></div>
      </div>
    </div>
  );
}

export default memo(DividerLine);
