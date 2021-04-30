import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ComboBoxItem(props) {
  return (
    <button className="jjara-combo-box-item dropdown-item" value={props.id} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

ComboBoxItem.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default memo(ComboBoxItem);
