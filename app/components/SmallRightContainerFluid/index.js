import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

function SmallRightContainerFluid(props) {
  return (
    <div className={`offset-md-1 col-md-3 col-md-pull-2 small-right-container-fluid`}>
      { props.children }
    </div>
  );
}

SmallRightContainerFluid.propTypes = {
  className: PropTypes.string
};

SmallRightContainerFluid.defaultProps = {
  className: '',
}

export default memo(SmallRightContainerFluid);
