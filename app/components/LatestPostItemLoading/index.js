import React, { memo } from 'react';
import LoadingLine from '../LoadingLine';
import LoadingContainer from '../LoadingContainer';
import PropTypes from 'prop-types';

function LatestPostItemLoading() {
  const id = _.uniqueId("latest-post-item-container-");
  const style = {
    "width": "330px"
  };

  return (
    <div className="card" style={ style }>
      <div className="img-elementor">
        <LoadingContainer id={id}>
          <LoadingLine width={100} widthUnit='%' height={165} />
        </LoadingContainer>
      </div>
      <div className="card-body latest-posts">
        <div className="post-text">
          <LoadingContainer>
            <LoadingLine randomWidthMax={280} randomWidthMin={125} height={48}/>
            <LoadingLine randomWidthMax={280} randomWidthMin={100} height={15}/>
            <LoadingLine randomWidthMax={280} randomWidthMin={50} height={15}/>
          </LoadingContainer>
        </div>
      </div>
    </div>
  );
}



export default memo(LatestPostItemLoading);
