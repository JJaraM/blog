import React, { memo } from 'react';
import LoadingLine from '../LoadingLine';
import LoadingContainer from '../LoadingContainer';

function LatestPostItemLoading() {
  return (
    <div className="card">
      <div className="img-elementor">
        <LoadingContainer>
          <LoadingLine width={333} height={165}/>
        </LoadingContainer>
      </div>
      <div className="card-body latest-posts">
        <div className="post-text">
          <LoadingContainer>
            <LoadingLine randomWidthMax={300} randomWidthMin={125} height={48}/>
            <LoadingLine randomWidthMax={250} randomWidthMin={100} height={15}/>
            <LoadingLine randomWidthMax={150} randomWidthMin={50} height={15}/>
          </LoadingContainer>
        </div>
      </div>
    </div>
  );
}

LatestPostItemLoading.propTypes = {};

export default memo(LatestPostItemLoading);
