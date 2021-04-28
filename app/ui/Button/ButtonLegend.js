import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ButtonLegend(props) {
  return (
    <div className="jjara-bnt-legend">
      { props.legend }
    </div>
  );
}

ButtonLegend.propTypes = {
  legend: PropTypes.string,
};

export default ButtonLegend;
