import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TagListItem from 'containers/TagListItem';
import { isLoadingComplete } from 'configuration/config';
import TagListItemLoading from '../TagListItemLoading';

function TagList(props) {

  const { items, loading } =  props;
  let list = [1, 2, 3, 4,5, 6, 7, 8, 9, 10].map(item => <TagListItemLoading key={`jjara-tag-list-item-loadings-${item}`}/> );

  if (isLoadingComplete(loading)) {
    list = items.map(item => <TagListItem key={`jjara-tag-list-item-${item.id}`} item={item} /> );
  }

  return (
    <>
      { list }
    </>
  );

}

TagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
};

export default memo(TagList);
