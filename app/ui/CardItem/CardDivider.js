import React, { memo } from 'react';


function CardDivider(props) {
  return (
    <div className="col-lg-6">
      { props.children }
    </div>
  );
}



export default memo(CardDivider);
