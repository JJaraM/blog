import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  return (
    <div className="recomendations-container">
      <i onClick={props.onPrevious} className="fa fa-arrow-left" aria-hidden="true"></i>
      <i onClick={props.onNext} className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
}

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default memo(Pagination);
