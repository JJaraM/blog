import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardInfoDescription(props) {
  return (
    <div className="description">
      <p>{ props.description} </p>
    </div>
  );
}

CardInfoDescription.propTypes = {
  description: PropTypes.string
};

export default memo(CardInfoDescription);
