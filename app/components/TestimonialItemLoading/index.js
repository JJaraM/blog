/**
 *
 * TestimonialItemLoading
 *
 */

import React, { memo } from 'react';
import LoadingLine from '../LoadingLine';
import LoadingContainer from '../LoadingContainer';

import './style.scss';
import LoadingCircle from '../LoadingCircle';

function TestimonialItemLoading() {
  
  return (
    <div className="card">
      <div className="testimonials">
        <div className="d-flex justify-content-center mt-30">
          <LoadingCircle width={110} height={100}/>
        </div>
        <div className="mb-30 mr-30 ml-30">
          <div class="post-text">
            <div class="meta-data">
              <LoadingLine width={200} height={15}/>
              <LoadingLine width={100} height={15}/>
              <LoadingLine randomWidthMax={150} randomWidthMin={50}  height={15}/>
            </div>
            <div class="description">
              <LoadingContainer>
                <LoadingLine width={200} height={15}/>
                <LoadingLine width={200} height={15}/>
                <LoadingLine randomWidthMax={150} randomWidthMin={50} height={15}/>
              </LoadingContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



TestimonialItemLoading.propTypes = {};

export default memo(TestimonialItemLoading);
