import React from 'react';
import './style.scss';

function ButtonDisable(props) {
  return (
    <button className={`jjara-btn-disabled btn `} disable={true}>
      { props.children }
    </button>
  );
}

export default ButtonDisable;
