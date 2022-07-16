import React, { memo } from 'react';
import PropTypes from 'prop-types';

function BigLeftContainerFluid(props) {

  const colMinimized = window.screen.availWidth > 1280 ? "col-md-11" : "col-md-10 ";
  const colMaximized = window.screen.availWidth > 1280 ? "col-md-7" : "col-md-7 ";

  if (props.isMinimized) {
    return (
      <div className={`${colMinimized} offset-md-1 col-md-pull-1 ${props.className}`}>
        { props.children }
      </div>
    );
  }

  return (
    <div className={`${colMaximized} offset-md-1 col-md-pull-1 ${props.className}`}>
      { props.children }
    </div>
  );
}

BigLeftContainerFluid.propTypes = {
  className: PropTypes.string,
  isMinimized: PropTypes.bool,
};

BigLeftContainerFluid.defaultProps = {
  className: '',
}

export default memo(BigLeftContainerFluid);
