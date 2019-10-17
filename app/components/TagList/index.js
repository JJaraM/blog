import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TagListItem from 'containers/TagListItem';

function TagList(props) {

  const { items } =  props;

  //Adding all option, this value does not exists in the data source
  var index = items.findIndex(x => x.id === 0)
  if (index === -1) {
    items.push({id: 0, name: "all"});
  }
  
  const content = items.map(item => (
    <TagListItem  key={`tag-item-${item.id}`} item={item} />
  ));

  return (  
    <ul>
      { content }
    </ul>
  );
}

TagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(TagList);
