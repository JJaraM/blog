import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RecomendationPostItem from 'containers/RecomendationPostItem';
import RecomendationSubListPostItemLoading from '../RecomendationSubListPostItemLoading';
import { canRender } from 'configuration/config';

function RightPanel(props) {
  const { items, status } =  props;

  let content = [3, 4, 5, 6].map(item => (
    <RecomendationSubListPostItemLoading key={`recommendation-item-${item}`} />
  ));

  if (canRender(status)) {
    content = items.splice(0).map(item => {
      item.description = '';
      return <RecomendationPostItem  key={`item-${item.id}`} item={item} />  
    });
  }
  
 

  return content;
}

RightPanel.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.any,
  status: PropTypes.number
};


export default memo(RightPanel);
