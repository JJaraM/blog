
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RenderComponent from 'components/RenderComponent';

import './style.scss';

function IconEdit(props) {
  return (
    <RenderComponent render={ props.render } >
      <button className="icon-button edit" onClick={ props.onClick } > 
        <i className="fa fa-pencil-square-o" />
        <FormattedMessage {...messages.label} />
      </button>
    </RenderComponent>
  );
}

IconEdit.propTypes = {
  onClick: PropTypes.func,
  render: PropTypes.bool
};

export default memo(IconEdit);
