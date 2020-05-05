import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Col6(props) {
  return (
    <div className="col-lg-6">
      { props.children }
    </div>
  );
}

Col6.propTypes = {};

export default memo(Col6);
