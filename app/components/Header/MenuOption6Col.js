import React from 'react';
import PropTypes from 'prop-types';
import MenuOption from './MenuLabel';

function MenuOption6Col(props) {
  return (
    <div className="col-lg-6 sign-in-with-user" onClick={props.onClick}>
      <div className="row sign-in-with menu-container">{props.title}</div>
      <div className="row menu-container">
        <i className="fa fa-user" aria-hidden="true" />
        <label className="menu-label">{props.label}</label>
        <div className="menu-right-arrow" />
      </div>
    </div>
  );
}

MenuOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
};

export default MenuOption6Col;
