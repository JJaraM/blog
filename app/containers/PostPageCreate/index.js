/**
 *
 * PostPageCreate
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectPostPageCreate from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function PostPageCreate() {
  useInjectReducer({ key: 'postPageCreate', reducer });
  useInjectSaga({ key: 'postPageCreate', saga });

  return (
    <div>
      <Helmet>
        <title>PostPageCreate</title>
        <meta name="description" content="Description of PostPageCreate" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

PostPageCreate.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  postPageCreate: makeSelectPostPageCreate(),
});

function mapDispatchToProps(dispatch) {
  return {
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
)(PostPageCreate);
