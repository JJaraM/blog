import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ButtonContainer(props) {
  return (
    <div className={`pb-30 ${props.className}`}>
      { props.children }
    </div>
  );
}

ButtonContainer.propTypes = {
  className: PropTypes.string,
};

export default ButtonContainer;
