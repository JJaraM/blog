import React from 'react';

function MenuDropDownContainer(props) {
  return (
    <div className="row sign-in-container">
      {props.children}
    </div>
  );
}

export default MenuDropDownContainer;
