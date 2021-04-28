/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import PostImageNotFound from 'images/PostImageNotFound.png';

function Img(props) {

  let img = PostImageNotFound;
  if (props.src) {
    img = props.src;
  }
  return <img
    className={props.className}
    src={img}
    alt={props.alt}
    onError={(e)=>{e.target.onerror = null; e.target.src="/PostImageNotFound.png"}}
  />;
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Img;
