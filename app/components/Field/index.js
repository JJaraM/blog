import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Field(props) {
  if (!props.obj) {
    return <div />
  }

  return props.obj[props.property];
}

Field.propTypes = {
  obj: PropTypes.object,
  property: PropTypes.string.isRequired,
};

export default memo(Field);
