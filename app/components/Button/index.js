import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button(props) {

  let Component = () => (
    <button className={`btn ${props.className}`} onClick={props.onClick}>
        { props.children }
      </button>
  );

  if (props.disable) {
    Component = () => (
      <button className={`btn-disabled btn ${props.className}`} onClick={props.onClick} disable={true}>
        { props.children }
      </button>
    );
  }

  return (
    <div className={`pb-30 ${props.containerClassName}`}>
      <Component />
      <div className="bnt-legend">
        { props.legend }
      </div>
    </div>
  );
}

Button.propTypes = {
  centerOnDiv: PropTypes.bool,
  disable: PropTypes.bool,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  legend: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  centerOnDiv: true,
  disable: false,
  className: '',
  containerClassName: '',
}

export default memo(Button);
