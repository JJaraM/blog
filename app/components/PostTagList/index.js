import React, { memo } from 'react';
import PropTypes from 'prop-types';
import PostTag from 'components/PostTag';
import ContainerCenter from '../ContainerCenter';

function PostTagList(props) {

  const { items, item } =  props;

  if (!items || !item) {
    return <div/>
  }
  const content = items.map(subItem => {
    if (item.tags && item.tags.includes(subItem.id)) {
      return <PostTag key={`tag-item-${subItem.id}`} item={subItem} />;
    }
  });

  return (
    <ContainerCenter>
      <div className="tags">
        { content }
      </div>
    </ContainerCenter>
  );
}

PostTagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default memo(PostTagList);
