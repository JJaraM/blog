import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ButtonNormal(props) {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

ButtonNormal.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonNormal;
