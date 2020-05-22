import React, { memo } from 'react';
import LatestPostItem from 'containers/LatestPostItem';
import LatestPostItemLoading from '../LatestPostItemLoading';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { isLoadingComplete } from 'configuration/config';
import ErrorMessage from 'components/ErrorMessage';

import './style.scss';

function LatestPostItemList(props) {
  
  const masonryOptions = {
    gutter: 20,
    transitionDuration: '0.8s',
  }

  let content = [1, 2, 3].map(item => (
    <LatestPostItemLoading key={`latest-post-item-${item}`} />
  ));

  if (isLoadingComplete(props.status === 2)) {
    content = props.items.map(item => (
      <LatestPostItem key={`latest-post-item-${item.id}`} item={item} />
    ));
  }

  if (props.status == 2) {
    return (
      <div className="mansory">
        <ErrorMessage />
      </div>
    )
  }

  return (
    <div className="mansory">
       <div className="d-flex justify-content-center">
          <Masonry options={masonryOptions} className="container">
            { content }
          </Masonry>
        </div>
    </div>
  );
}

LatestPostItemList.propTypes = {
  loading: PropTypes.bool,
  status: PropTypes.number,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};


export default memo(LatestPostItemList);
