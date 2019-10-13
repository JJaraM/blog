import React, { memo } from 'react';
import LatestPostItem from 'containers/LatestPostItem';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';

import './style.scss';

function LatestPostItemList(props) {
  
  const masonryOptions = {
    gutter: 20,
    transitionDuration: '0.8s',
    
  }

  const content = props.items.map(item => (
    <LatestPostItem  key={`item-${item.id}`} item={item} />
  ));

  return (
    <div class="mansory">
        <Masonry options={masonryOptions} className="main_container">
          { content }
        </Masonry>
    </div>
  );
}

LatestPostItemList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


export default memo(LatestPostItemList);
