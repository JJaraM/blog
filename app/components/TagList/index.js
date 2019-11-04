import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TagListItem from 'containers/TagListItem';
import { isLoadingComplete } from 'configuration/config';
import TagListItemLoading from '../TagListItemLoading';

function TagList(props) {

  const { items, loading } =  props;

  let content = [1, 2, 3, 4,5, 6, 7, 8, 9, 10].map(item => (
    <TagListItemLoading key={`latest-post-item-${item}`}/>
  ));

  if (isLoadingComplete(loading)) {
    //Adding all option, this value does not exists in the data source
    var index = items.findIndex(x => x.id === 0)
    if (index === -1) {
      items.push({id: 0, name: "all"});
    }
    
    content = items.map(item => (
      <TagListItem  key={`tag-item-${item.id}`} item={item} />
    ));
  }
 

  return (  
    <div id="tags-section" className="section_tags row justify-content-center align-self-center">
      <ul>
        { content }
      </ul>
    </div>
  );
}

TagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
};

export default memo(TagList);
