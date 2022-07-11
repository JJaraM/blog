import React from 'react';
import PropTypes from 'prop-types';

function ButtonTag(props) {
  return (
    <button className="tag-button" value={props.value} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

ButtonTag.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ButtonTag;
