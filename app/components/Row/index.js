/**
 *
 * Row
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Row(props) {
  const id = props.id ? props.id : _.uniqueId("row-");

  return (
    <div className={`row ${props.className}`} id={id}>
      { props.children }
    </div>
  );
}

Row.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

Row.defaultProps = {
  className: '',
  id: undefined,
};

export default memo(Row);
