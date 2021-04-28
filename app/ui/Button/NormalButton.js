import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function NormalButton(props) {
  return (
    <button className={`btn`} onClick={props.onClick}>
      { props.children }
    </button>
  );
}

NormalButton.propTypes = {
  onClick: PropTypes.func,
};

export default NormalButton;
