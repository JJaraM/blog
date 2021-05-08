import React, { memo } from 'react';

function CardInfoContainer(props) {
  return (
    <div className="post-text">
      { props.children }
    </div>
  );
}



export default memo(CardInfoContainer);
