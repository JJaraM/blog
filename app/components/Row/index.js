/**
 *
 * Row
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Row(props) {
  return (
    <div className="row">
      { props.children }
    </div>
  );
}

Row.propTypes = {};

export default memo(Row);
