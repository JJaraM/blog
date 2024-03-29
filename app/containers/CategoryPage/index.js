/**
 *
 * CategoryPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { isLoadingComplete } from 'configuration/config';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

import Container from 'components/Container';
import SecondarySection from 'components/SecondarySection';
import PrincipalTitle from 'components/PrincipalTitle';
import LatestPostItemList from 'components/LatestPostItemList';
import ContainerCenter from 'components/ContainerCenter';
import Button from 'ui/Button';
import { makeTagItems } from 'containers/TagContainer/selectors';
import { retrieve, retrieveMore } from './actions';
import saga from './saga';
import reducer from './reducer';
import { makeItems } from './selectors';
import { makeInfinitiveLoading } from 'containers/App/selectors';

let prevId;

export function CategoryPage({ match, onLoadPage, items, onViewMore, tags, infinitiveLoading}) {
  useInjectReducer({ key: 'categoryPage', reducer });
  useInjectSaga({ key: 'categoryPage', saga });

  const { id } = match.params;
  let title;

  if (tags && tags.length > 0) {
    const currentTag = tags.filter(tag => tag.id == id);
    if (currentTag && currentTag.length > 0) {
      title = currentTag[0].name;
    }
  }

  if (!prevId) {
    prevId = id;
  }

  if (prevId !== id) {
    prevId = id;
    onLoadPage(prevId);
  }

  useEffect(() => {
    onLoadPage(prevId);
  }, []);

  let ViewMore = () => (
    <ContainerCenter>
      <Button>Loading...</Button>
    </ContainerCenter>
  );

  if (isLoadingComplete(items.length === 0)) {
    ViewMore = () => (
      <ContainerCenter>
        <Button onClick={onViewMore}>View More</Button>
      </ContainerCenter>
    );
  }

  return (
    <Container>
      <SecondarySection>
        <PrincipalTitle
          center
          divider
          title={title}
          bottomDescription="In the below section you will find the last post for the current category"
        />

        <LatestPostItemList items={items} loading={ items.length === 0 || infinitiveLoading } />

        <ViewMore />
      </SecondarySection>
    </Container>
  );
}

CategoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadPage: PropTypes.func,
  // Indicates if the option for the infinitive loading is activated
  infinitiveLoading: makeInfinitiveLoading(),
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
  tags: makeTagItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: id => dispatch(retrieve(id)),
    onViewMore: () => dispatch(retrieveMore()),
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
)(CategoryPage);
