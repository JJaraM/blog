import React, { memo } from 'react';
import PropTypes from 'prop-types';

function RenderComponent(props) {
  if (props.component) {
    return <> { props.component } </>
  }
  if (props.render) {
    return <>{ props.children }</>
  }
  return (<></>);
}

RenderComponent.propTypes = {
  render: PropTypes.bool,
  component: PropTypes.node,
};

export default memo(RenderComponent);
