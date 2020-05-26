import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RecomendationPostItem from 'containers/RecomendationPostItem';
import RecomendationPostItemLoading from '../RecomendationPostItemLoading';
import { canRender } from 'configuration/config';

function LeftPanel(props) {
  const { items, status } =  props;

  let content = [1, 2].map(item => (
    <RecomendationPostItemLoading key={`recommendation-item-${item}`} />
  ));

  if (canRender(status)) {
    content = items.splice(0, 2).map(item => (
      <RecomendationPostItem key={`recommendation-item-${item.id}`} item={item} />
    ));
  }


  return content;
}

LeftPanel.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  error: PropTypes.any,
  status: PropTypes.number
};


export default memo(LeftPanel);
