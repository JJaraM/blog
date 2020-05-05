import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RenderComponent from 'components/RenderComponent';
import './style.scss';

function IconDelete(props) {
  return (
    <RenderComponent render={ props.render } >
      <button className="icon-button delete" onClick={ props.onClick } > 
        <i className="fa fa fa-trash-o" />
        <FormattedMessage {...messages.label} />
      </button>
    </RenderComponent>
  );
}

IconDelete.propTypes = {
  onClick: PropTypes.func,
  render: PropTypes.bool
};

export default memo(IconDelete);
