
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RenderComponent from 'components/RenderComponent';
import './style.scss';

function IconClose(props) {
  return (
    <RenderComponent render={ props.render } >
      <button className="icon-button icon-close" onClick={ props.onClick } > 
        <i className="fa fa-times-circle" />
        <FormattedMessage {...messages.label} />
      </button>
    </RenderComponent>
  );
}

IconClose.propTypes = {
  onClick: PropTypes.func,
  render: PropTypes.bool
};

export default memo(IconClose);
