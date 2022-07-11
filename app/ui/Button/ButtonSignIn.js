import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Button from 'ui/Button'

function ButtonSignIn(props) {
  return (
    <Button
      className="signIn-button"
      containerClassName="signIn-button-container"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
}

ButtonSignIn.propTypes = {
  onClick: PropTypes.func,
};

export default ButtonSignIn;
