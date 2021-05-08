import React, { memo } from 'react';
import PropTypes from 'prop-types';


function CardItem(props) {

  let className = '';

  if (props.refresh) {
    className = 'refresh';
  }

  return (
    <div className="pb-30 ">
      <div className={`jjara-card-item ${className}`}>
        <div className="row">
          { props.children }
        </div>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  refresh: PropTypes.any,
};

export default memo(CardItem);
