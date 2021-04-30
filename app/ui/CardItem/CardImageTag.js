import React, { memo } from 'react';
import PropTypes from 'prop-types';

function CardImageTag(props) {

  return (
    <div className="tags views">
      <span> { props.tag } </span>
    </div>
  );
}

CardImageTag.propTypes = {
  tag: PropTypes.any
};

export default memo(CardImageTag);
