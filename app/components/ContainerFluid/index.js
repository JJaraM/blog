
import React, { memo } from 'react';

function ContainerFluid(props) {
  return (
    <div className="container-fluid container-fluid-padding ">
      { props.children }
    </div>
  );
}

export default memo(ContainerFluid);
