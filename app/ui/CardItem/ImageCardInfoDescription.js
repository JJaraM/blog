import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ImageCardInfoDescription(props) {
  return (
    <div className="description">
      <p>{ props.description} </p>
    </div>
  );
}

ImageCardInfoDescription.propTypes = {
  description: PropTypes.string
};

export default memo(ImageCardInfoDescription);
