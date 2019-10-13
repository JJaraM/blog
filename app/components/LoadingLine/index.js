import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

function LoadingLine(props) {
  const { width, height, randomWidthMin, randomWidthMax, randomHeightMin, randomHeightMax } = props;
  const id = _.uniqueId("prefix-");

  let loadingWidth = width;
  let loadingHeight = height;

  if (randomWidthMax) {
    loadingWidth = getRandomSize(randomWidthMax, randomWidthMin);
  }

  if (randomHeightMax) {
    loadingHeight = getRandomSize(randomHeightMax, randomHeightMin)
  }
  
  const CustomStyle = createGlobalStyle`
    .${id} .line {
      width: ${loadingWidth}px;
      height: ${loadingHeight}px;
      animation: post-small 1.6s infinite linear;
      margin-bottom: 5px;
    }

    
    @keyframes post-small {
      0% {
        background-position: -100px;
      }
    
      40%, 100% {
        background-position: ${loadingWidth}px;
      }
    }
      
    .line {
      float: left;
      border-radius: 7px;
      background-image: linear-gradient(90deg, var(--primary-loading-bg-color) 0px, var(--secondary-loading-bg-color)40px, var(--primary-loading-bg-color) 80px);
      background-size: 600px;
    
    }
      
    .line ~ .line {
      background-color: #ddd;
    }
  `;

  return (
    <>
      <div className={id}>
        <div className="line" />
      </div>
      <CustomStyle/>
    </>
  );
}

function getRandomSize(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

LoadingLine.propTypes = {
  width: PropTypes.number,
  randomWidthMin: PropTypes.number,
  randomWidthMax: PropTypes.number,
  height: PropTypes.number,
  randomHeightMin: PropTypes.number,
  randomHeightMax: PropTypes.number,
};

LoadingLine.defaultProps = {
  randomWidthMin: 0,
  randomHeightMin: 0,
};

export default memo(LoadingLine);
