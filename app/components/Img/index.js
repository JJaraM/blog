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
    console.log('src');
    return <img className={props.className} src={props.src} alt={props.alt} />;
  }

  console.log('non src');
  return <img className={props.className} src={img} alt={props.alt} />;

  
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Img;
