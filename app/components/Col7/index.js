import React, { memo } from 'react';

function Col7(props) {
  return (
    <div className="col-lg-7">
      { props.children }
    </div>
  );
}

Col7.propTypes = {};

export default memo(Col7);
