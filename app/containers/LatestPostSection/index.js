import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { isLoadingComplete } from 'configuration/config';
import { FormattedMessage } from 'react-intl';

import { makeItems, makeLoading, makeIsFirstLoading, makeStatus, makeMessage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { retrieve, retrieveMore } from './actions';
import messages from './messages';

import TagContainer from 'containers/TagContainer';

import LatestPostItemList from 'components/LatestPostItemList';
import Button from 'components/Button';
import PrincipalTitle from 'components/PrincipalTitle';
import ContainerCenter from 'components/ContainerCenter';
import Container from 'components/Container';
import SecondarySection from 'components/SecondarySection';

export function LatestPostSection({
  items,
  loading,
  isFirstLoading,
  onLoadPage,
  onViewMore,

  status,
  message,
}) {
  useInjectReducer({ key: 'latestPostSection', reducer });
  useInjectSaga({ key: 'latestPostSection', saga });

   useEffect(() => {
     if (!isFirstLoading) {
      onLoadPage();
     }
  }, []);

  let ViewMore = () => (
    <ContainerCenter>
      <Button>
        Loading...
      </Button>
    </ContainerCenter>

  );

  if (isLoadingComplete(status === 2)) {
    ViewMore = () => (
      <ContainerCenter>
        <Button onClick={onViewMore}>
          View More
        </Button>
      </ContainerCenter>
    )
  }

  if (status === 2) {
    ViewMore = () => <></>
  }

  return (
    <Container>

      <SecondarySection>
        <PrincipalTitle 
          center={ true } 
          divider={ true }
          title={
            <FormattedMessage {...messages.header } />
          }
          bottomDescription="In the below section you will find the most important post in the last month"
        />
      
        <ContainerCenter>
          <TagContainer />
        </ContainerCenter>

        <LatestPostItemList items={items} loading={loading} status = {status} />

        <ViewMore />
      </SecondarySection>
    </Container>
  );
}

LatestPostSection.propTypes = {
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
  loading: makeLoading(),
  isFirstLoading: makeIsFirstLoading(),
  status: makeStatus(),
  message: makeMessage(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onViewMore:() => dispatch(retrieveMore()),
 
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
)(LatestPostSection);
