
import React, { memo } from 'react';

function ContainerCenter(props) {
  return (
    <div className="d-flex justify-content-center">
      { props.children }
    </div>
  );
}

export default memo(ContainerCenter);
