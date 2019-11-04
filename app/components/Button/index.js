import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button(props) {

  return (
    <div className="pb-30">
      <button className="btn" onClick={props.onClick}>
        { props.children }
      </button>
      <div className="bnt-legend">
        { props.legend }
      </div>
    </div>
  );
}

Button.propTypes = {
  centerOnDiv: PropTypes.bool,
  legend: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  centerOnDiv: true,
}

export default memo(Button);
