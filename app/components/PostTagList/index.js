import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PostTag from 'components/PostTag';

function PostTagList(props) {

  const { items, ids } =  props;


  const content = items.map(item => {
    if (ids && ids.includes(item.id)) {
      return <PostTag key={`tag-item-${item.id}`} item={item} />;
    }
  });

  return (
    <div className="tags">
      { content }
    </div>
  );
}

PostTagList.propTypes = {
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  ids: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(PostTagList);
