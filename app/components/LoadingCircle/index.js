/**
 *
 * LoadingLine
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';

// import styled from 'styled-components';

function LoadingCircle(props) {
  const { width, height } = props;
  const id = _.uniqueId("prefix-");
  
  const CustomStyle = createGlobalStyle`
    
    .${id} .line {
      width: ${width}px;
      height: ${height}px;
      animation: post-small 1.6s infinite linear;
      margin-bottom: 5px;
      border-radius: 50%;
    }
    
    @keyframes post-small {
      0% {
        background-position: -100px;
      }
    
      40%, 100% {
        background-position: ${width}px;
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
      <div className={id }>
        <div className="line" />
      </div>
      <CustomStyle/>
    </>
  );
}

LoadingCircle.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default memo(LoadingCircle);
