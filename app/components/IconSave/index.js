
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RenderComponent from 'components/RenderComponent';
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

import './style.scss';

function IconSave(props) {
 
  let CustomStyle = createGlobalStyle``;
  let Message = () => <FormattedMessage {...messages.label} /> ;

  let Button = styled.button`
    text-align: center;
  `;

  if (props.status === 1) {
    Button = styled.button`
      background: #0693e3 !important;
      cursor: progress !important;
    `;
    Message = () => <FormattedMessage {...messages.inProgress} /> ;
  } else if (props.status === 2) {
    Button = styled.button`
      background: #03c1ae !important;
    `;
    Message = () => <FormattedMessage {...messages.done} /> ;
  } else if (props.status === 3) {
    Button = styled.button`
      background: #fe7570 !important;
    `;
    Message = () => <FormattedMessage {...messages.error} /> ;
  }

  return (
    <>
      <RenderComponent render={ props.render } >
        <Button className="icon-button icon-save" onClick={ props.onClick }> 
          <i className="fa fa-hdd-o" />
          <Message />
        </Button>
      </RenderComponent>
    </>
  );
}

IconSave.propTypes = {
  onClick: PropTypes.func,
  render: PropTypes.bool,
  status: PropTypes.number,
};

IconSave.defaultProps = {
  status: 0,
}

export default memo(IconSave);
