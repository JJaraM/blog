import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostTag(props) {
  return (
    <span>
      <Link to={`/category/${props.item.id}`}>{ props.item.name }</Link>
    </span>
  );
}

PostTag.propTypes = {
  item: PropTypes.object.isRequired,
};

export default memo(PostTag);
