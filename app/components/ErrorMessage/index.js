/**
 *
 * ErrorMessage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.scss';

function ErrorMessage() {
  return (
    <div className="d-flex justify-content-center  pb-30">
        <div className="row error">
          <div className="footer-logo-box">
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </div>
        </div>
    </div>
  );
}

ErrorMessage.propTypes = {};

export default memo(ErrorMessage);
