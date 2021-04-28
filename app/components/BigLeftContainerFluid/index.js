import React, { memo } from 'react';
import PropTypes from 'prop-types';

function BigLeftContainerFluid(props) {

  if (props.isMinimized) {
    return (
      <div className={`col-md-10 offset-md-1 col-md-pull-1 ${props.className}`}>
        { props.children }
      </div>
    );
  }

  return (
    <div className={`col-md-6 offset-md-1 col-md-pull-1 ${props.className}`}>
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
