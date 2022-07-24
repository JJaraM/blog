import React, { memo } from 'react';
import PropTypes from 'prop-types';


function CardItem(props) {

  let refresh = '';

  if (props.refresh) {
    refresh = 'refresh';
  }

  return (
    <div className="pb-30 ">
      <div className={`jjara-card-item ${refresh} ${props.className}`}>
        <div className="row">
          { props.children }
        </div>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  refresh: PropTypes.any,
  className: PropTypes.string,
};

export default memo(CardItem);
