import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TagListItem from 'containers/TagListItem';
import TagListItemMore from 'containers/TagListItemMore';
import { isLoadingComplete } from 'configuration/config';
import TagListItemLoading from '../TagListItemLoading';


function TagList(props) {

  const { items, loading } =  props;

  let list = [1, 2, 3, 4,5, 6, 7, 8, 9, 10].map(item => (
    <TagListItemLoading key={`latest-post-item-${item}`}/>
  ));

  const splitListOn = 8;

  if (isLoadingComplete(loading)) {
    //Adding all option, this value does not exists in the data source
    var index = items.findIndex(x => x.id === 0)
    if (index === -1) {
      items.splice(splitListOn - 2, 0, {id: 0, name: "all"});
    }
    
    var pos = 0;
    list = items.map(item => {
      pos++;
      if (pos < splitListOn) {
        return <TagListItem key={`tag-item-${item.id}`} item={item} />;
      }
      return;      
    });
  }
 

  return (  
    <div id="tags-section" className="section_tags row justify-content-center align-self-center">
      <ul>
        { list }
        <li>
          <TagListItemMore items={items} after={splitListOn} />
        </li>
      </ul>
    </div>
  );
}

TagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
};

export default memo(TagList);
