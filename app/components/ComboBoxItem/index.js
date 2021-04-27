import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function ComboBoxItem(props) {
  return (
    <button key={`jjara-combo-box-item-${props.id}`} className="jjara-combo-box-item dropdown-item" value={props.id} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

ComboBoxItem.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(ComboBoxItem);
