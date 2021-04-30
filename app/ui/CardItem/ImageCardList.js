import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { canRender } from '../../configuration/config';

function ImageCardList(props) {
  const { items, status } =  props;
  let content = [...Array(props.size).keys()]
    .map(item =>
      props.onEach(item, _.uniqueId(props.itemKey), true)
    );

  if (canRender(status)) {
    content = items
      .slice()
      .splice(props.start, props.size)
      .map(item =>
        props.onEach(item, _.uniqueId(props.itemKey), props.loading)
      );
  }

  return content;
}

ImageCardList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  status: PropTypes.number,
  onEach: PropTypes.func,
  loading: PropTypes.bool,
  itemKey: PropTypes.string,
  size: PropTypes.number,
  start: PropTypes.number,
};

export default memo(ImageCardList);
