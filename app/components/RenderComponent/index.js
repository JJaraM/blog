import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RenderComponent(props) {
  if (props.render) {
    return <>{ props.children }</>
  }
  return (<></>);
}

RenderComponent.propTypes = {
  render: PropTypes.bool,
};

export default memo(RenderComponent);
