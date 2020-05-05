/**
 * Component that contains the style for the metadata classes
 * @author Jonathan Jara Morales
 * @since 2020-04-2
 */
import React, { memo } from 'react';

import './style.scss';

function Metadata(props) {
  return (
    <div className="meta-data">
      { props.children }
    </div>
  );
}

export default memo(Metadata);
