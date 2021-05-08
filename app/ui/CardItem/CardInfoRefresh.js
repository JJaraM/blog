import React, { memo } from 'react';
import RefreshIcon from '../RefreshIcon';
import './style.scss';
import PropTypes from 'prop-types';

function CardInfoRefresh(props) {
  let refreshIcon = <></>;

  if (props.refresh) {
    refreshIcon = <RefreshIcon />;
  }
  return (
    <div className="jjara-image-card-info-refresh">
      { refreshIcon }
    </div>
  );
}

CardInfoRefresh.propTypes = {
  refresh: PropTypes.any,
};

export default memo(CardInfoRefresh);
