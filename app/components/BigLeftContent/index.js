import React, { memo } from 'react';

function BigLeftContent(props) {
  return (
    <div className="col-lg-8">
      { props.children }
    </div>
  );
}

BigLeftContent.propTypes = {};

export default memo(BigLeftContent);
