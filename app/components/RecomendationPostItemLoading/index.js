import React, { memo } from 'react';
import LoadingLine from '../LoadingLine';
import LoadingContainer from '../LoadingContainer';
import CardContainer from '../../ui/CardItem';

function RecomendationPostItemLoading() {
  return (
    <CardContainer>
      <div className="col-lg-6">
        <div className="img-elementor">
          <LoadingContainer>
            <LoadingLine width={320} height={165}/>
          </LoadingContainer>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="post-text">
          <LoadingContainer>
            <LoadingLine width={200} height={48} />
            <LoadingLine width={200} height={15}/>
            <LoadingLine randomWidthMax={150} randomWidthMin={50} height={15}/>
          </LoadingContainer>
        </div>
      </div>
    </CardContainer>
  );
}

export default memo(RecomendationPostItemLoading);
