import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { accept, denied, verify } from './actions';
import { acknowledge } from './selectors';

export function CookieBanner({
 onAccept,
 onDenied,
 onLoad,
 acknowledge,
}) {

  useEffect(() => {}, []);
  useInjectReducer({ key: 'cookieBanner', reducer });
  useInjectSaga({ key: 'cookieBanner', saga });

  useEffect(() => {
    onLoad();
  }, []);

  if (acknowledge) {
    return null;
  }

  return (
    <div className="cookie-banner">
      <button onClick={ onDenied }>[X]</button>

      <div>
        Cookies and IP addresses allow us to deliver
        and improve our web content and to provide you with a personalized experience.
        Our website uses cookies and collects your IP address for these purposes.

        =====================================================<br />
        | Cookies and IP addresses allow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
        | to deliver and improve our web content&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      |<br />
        | and to provide you with a personalized experience |<br />
        | Our website uses cookies and collects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          |<br />
        | your IP address for these purposes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|<br />
        | <button onClick={onAccept}>[Y]es, I agree</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={ onDenied }>[N]o, I love my privacy |</button>
        =====================================================
      </div>

      ~&nbsp;root: <input type="text" />

    </div>
  );
}
CookieBanner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  acknowledge: acknowledge(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoad:() => dispatch(verify()),
    onAccept: () => dispatch(accept()),
    onDenied: () => dispatch(denied()),
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CookieBanner);

