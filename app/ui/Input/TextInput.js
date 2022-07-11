import React, { memo } from 'react';
import PropTypes from 'prop-types';

function TextInput(props) {
  return (
    <input
      type="text"
      className="search"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.oneOfType([PropTypes.any, PropTypes.string]),
};

export default memo(TextInput);
