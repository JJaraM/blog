import React from 'react';
import PropTypes from 'prop-types';
import RenderComponent from '../RenderComponent';

function MenuLabel(props) {
  return (
    <RenderComponent render={props.render}>
      <button
        className="jjara-btn-transparent nav-link dropdown-toggle menu-option-reactjs"
        // data-toggle="dropdown"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </RenderComponent>
  );
}

MenuLabel.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  render: PropTypes.bool,
  id: PropTypes.string,
};

MenuLabel.defaultProps = {
  render: true,
};

export default MenuLabel;
