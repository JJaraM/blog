import React, { memo } from 'react';
import LatestPostItem from 'containers/LatestPostItem';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import LatestPostItemLoading from '../LatestPostItemLoading';

import './style.scss';
import { isInfitiveLoading } from '../../configuration/config';

function LatestPostItemList(props) {
  const masonryOptions = {
    gutter: 20,
    transitionDuration: '0.8s',
  };

  let content = [1, 2, 3].map(item => <LatestPostItemLoading key={`latest-post-item-${item}`} />);

  let loading = props.loading;

  if (!loading) {
    loading = isInfitiveLoading();
  }

  if (!loading) {
    content = props.items.map(item => (
      <LatestPostItem key={`latest-post-item-${item.id}`} item={item} />
    ));
  }

  return (
    <div className="mansory">
      <div className="d-flex justify-content-center">
        <Masonry options={masonryOptions} className="container">
          {content}
        </Masonry>
      </div>
    </div>
  );
}

LatestPostItemList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(LatestPostItemList);
