import React, { memo } from 'react';


function CardItem(props) {

  return (
    <div className="row pb-30">
      { props.children }
    </div>
  );
}

export default memo(CardItem);
