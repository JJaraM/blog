import React from 'react';
import PropTypes from 'prop-types';
import RenderComponent from '../RenderComponent';

import './style.scss';

function ButtonIcon(props) {
  return (
    <RenderComponent render={props.render}>
      <button className={`btn-search ${props.className}`} onClick={props.onClick} />
    </RenderComponent>
  );
}

ButtonIcon.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  render: PropTypes.bool,
};

ButtonIcon.defaultProps = {
  render: true,
};

export default ButtonIcon;
