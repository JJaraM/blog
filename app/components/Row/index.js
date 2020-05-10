/**
 *
 * Row
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Row(props) {
  return (
    <div className={`row ${props.className}`}>
      { props.children }
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
};

Row.defaultProps = {
  className: '',
};

export default memo(Row);
