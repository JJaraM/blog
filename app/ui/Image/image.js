import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  return (
    <img src={props.src}
         className={props.className}
         onError={(e)=>{
           e.target.onerror = null; e.target.src=props.default
         }}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  default: PropTypes.string,
};

export default memo(Image);
