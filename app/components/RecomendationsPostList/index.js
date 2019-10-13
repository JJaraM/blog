import React, { memo } from 'react';
import RecomendationPostItem from 'containers/RecomendationPostItem';
import PropTypes from 'prop-types';

import './style.scss';

function RecomendationsPostList(props) {
  
  const { items } =  props;
  
  const principalItems = items.splice(0, 2);
  const secondaryItems = items.splice(2);

  const content = principalItems.map(item => (
    <RecomendationPostItem  key={`item-${item.id}`} item={item} />
  ));

  const subList = secondaryItems.map(item => {
    item.description = '';
    return <RecomendationPostItem  key={`item-${item.id}`} item={item} />
            
  });

  return (
    <div class="container left-text">
      <div class="col-lg-8">
        {content}
      </div>
      <div class="col-lg-4 sublist">
        {subList}
       </div>
    </div>
  );
}

RecomendationsPostList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


export default memo(RecomendationsPostList);
