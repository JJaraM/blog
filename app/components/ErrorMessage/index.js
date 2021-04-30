/**
 *
 * ErrorMessage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Button from 'ui/Button';
import './style.scss';

function showMessage(id, message) {
  console.log(message);
}

function ErrorMessage(props) {
  const { error, isAdmin } = props;

  if (error === null || error === undefined) {
    return (
      <>
        { props.children }
      </>
    )
  }

  return (
    <div className="d-flex justify-content-center  pb-30">
        <div className="row error">
          <div className="footer-logo-box">
            <h1>
              { error.error }
            </h1>

            <div className="container d-flex justify-content-center testimonial-section" >
              <Button id='btn-error' onClick={() => showMessage('btn-error', error.error)}>
                Error
              </Button>

              <Button id='btn-stackTrace' onClick={() => showMessage('btn-stackTrace', error.trace)}>
                StackTrace
              </Button>
            </div>

          </div>
        </div>
    </div>
  );
}

ErrorMessage.propTypes = {
  error: PropTypes.any,
  isAdmin: PropTypes.bool
};

export default memo(ErrorMessage);
