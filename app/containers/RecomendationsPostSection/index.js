import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { selectItems, selectStatus, selectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { retrieve } from './actions';

import RecomendationsPostList from 'components/RecomendationsPostList';
import PrimarySection from 'components/PrimarySection';
import { makeIsAuthenticated } from 'containers/SignIn/selectors';

import ErrorMessage from 'components/ErrorMessage';
import { canRenderError } from 'configuration/config';

export function RecomendationsPostSection({
  items,
  status,
  error,
  onLoadPage,
  isAuthenticated,
}) {
  useInjectReducer({ key: 'recomendationsPostSection', reducer });
  useInjectSaga({ key: 'recomendationsPostSection', saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  if (canRenderError(status)) {
    return <ErrorMessage error={ error } isAdmin={ isAuthenticated } />
  }

  return (
    <PrimarySection>
      <RecomendationsPostList 
        items={ items } 
        status={ status } 
        error= { error }
      />
    </PrimarySection>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectItems(),
  status: selectStatus(),
  error: selectError(),
  isAuthenticated: makeIsAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
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
)(RecomendationsPostSection);
