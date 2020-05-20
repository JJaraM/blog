
import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Container(props) {
  return (
    <div className={`container ${props.className}`}>
      { props.children }
    </div>
  );
}

Container.propTypes = {
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
}

export default memo(Container);
