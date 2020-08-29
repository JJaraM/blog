/**
 *
 * ArrowButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function ArrowButton(props) {
  const { onClick, direction } = props;

  if (direction === 'left') {
    return (
      <div className="button-container">
        <span className="circle-button page-numbers" onClick={onClick}>
          <svg className="slinder-arrow-svg slinder-left-arrow" 
            x="0px" 
            y="0px" 
            width="16px" 
            height="16px" 
            viewBox="0 0 7 12" 
            >
              <polyline fill="var(--main-title-color)" 
              points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "></polyline>
          </svg>

        </span>
      </div>
    );
  }

  if (direction === 'right') {
    return (
      <div className="button-container" onClick={onClick}>
        <span className="circle-button page-numbers">
        <svg className="slinder-arrow-svg slinder-right-arrow" 
          x="0px" 
          y="0px" 
          width="16px" 
          height="16px" 
          viewBox="0 0 7 12" 
          >
            <polyline  fill="var(--main-title-color)" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "></polyline>
        </svg>
        </span>
      </div>
    )
  }
  
  return <div />;
}

ArrowButton.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ArrowButton);
