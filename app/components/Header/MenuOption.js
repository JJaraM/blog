import React from 'react';
import PropTypes from 'prop-types';
import RenderComponent from '../RenderComponent';

function MenuOption(props) {
  return (
    <RenderComponent render={props.render}>
      <li className="nav-item active dropdown">
        {props.children}
      </li>
    </RenderComponent>
  );
}

MenuOption.propTypes = {
  render: PropTypes.bool,
};

MenuOption.defaultProps = {
  render: true,
};

export default MenuOption;
