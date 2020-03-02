import React, { memo } from 'react';
import PropTypes from 'prop-types';

function BigLeftContent(props) {
  return (
    <div className={`col-lg-8 ${props.className}`}>
      { props.children }
    </div>
  );
}

BigLeftContent.propTypes = {
  className: PropTypes.string
};

BigLeftContent.defaultProps = {
  className: '',
}

export default memo(BigLeftContent);
