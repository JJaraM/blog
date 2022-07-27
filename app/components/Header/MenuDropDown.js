import React from 'react';

function MenuDropDown(props) {
  return (
    <div className="dropdown-menu dropdown-menu-right sign-in" aria-labelledby="navbarDropdown">
      {props.children}
    </div>
  );
}

export default MenuDropDown;
