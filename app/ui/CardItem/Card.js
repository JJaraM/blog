import React, { memo } from 'react';


function Card(props) {
  return (
    <div className="card">
      { props.children }
    </div>
  );
}


export default memo(Card);
