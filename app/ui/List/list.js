import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { canRender } from '../../configuration/config';

function List(props) {
  const { items, loading } =  props;
  let content = [...Array(props.size).keys()]
    .map(item =>
      props.onEach(item, _.uniqueId(props.itemKey), true)
    );

  if (!loading) {
   content = items
      .map(item =>
        props.onEach(item, _.uniqueId(props.itemKey), props.loading)
      );
  }

  return (
    <div className="container d-flex justify-content-center testimonial-section">
      { content }
    </div>
  );
}

List.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  status: PropTypes.number,
  onEach: PropTypes.func,
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default memo(List);
