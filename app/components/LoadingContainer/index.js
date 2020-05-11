import React, { memo } from 'react';

import './style.scss';
import PropTypes from 'prop-types';

function LoadingContainer(props) {
  
  return (
    <div className="loading" id={props.id}>
      { props.children }
    </div>
  );
}

LoadingContainer.propTypes = {
  id: PropTypes.string,
};

LoadingContainer.defaultProps = {
  id: '',
};

export default memo(LoadingContainer);
