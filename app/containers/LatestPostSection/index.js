import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { socket } from 'configuration/socket';
import TagContainer from 'containers/TagContainer';
import LatestPostItemList from 'components/LatestPostItemList';
import PrincipalTitle from 'components/PrincipalTitle';
import ContainerCenter from 'components/ContainerCenter';
import Container from 'components/Container';
import SecondarySection from 'components/SecondarySection';
import ButtonViewMore from 'components/ButtonViewMore';
import messages from './messages';
import { retrieve, retrieveMore, refresh } from './actions';
import reducer from './reducer';
import { makeItems, makeLoading, makeIsFirstLoading, makeStatus, makeMessage } from './selectors';
import saga from './saga';

export function LatestPostSection({
  items,
  loading,
  isFirstLoading,
  onLoadPage,
  onViewMore,
  onRefresh,
  status,
}) {
  useInjectReducer({ key: 'latestPostSection', reducer });
  useInjectSaga({ key: 'latestPostSection', saga });

  useEffect(() => {
    if (!isFirstLoading) {
      onLoadPage();
    }
  }, []);

  socket('post').watchData(onRefresh);

  return (
    <Container>
      <SecondarySection>
        <PrincipalTitle
          title={
            <FormattedMessage {...messages.header} />
          }
          bottomDescription={
            <FormattedMessage {...messages.description} />
          }
        />

        <ContainerCenter>
          <TagContainer />
        </ContainerCenter>

        <LatestPostItemList items={items} loading={loading} status={status} />

        <ButtonViewMore loading={loading} onClick={onViewMore} />
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
    onViewMore: () => dispatch(retrieveMore()),
    onRefresh: item => dispatch(refresh(item)),
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
