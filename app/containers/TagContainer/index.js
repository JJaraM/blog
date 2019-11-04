import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { retrieve } from './actions';
import { makeTagItems, makeLoading, makeIsFirstLoading } from './selectors'
import TagList from 'components/TagList';
import PostTagList from 'components/PostTagList';

export function TagContainer({
  items,
  item,
  usePost,
  loading,
  isFirstLoading,
  onLoadPage,
}) {
  useInjectReducer({ key: 'tagContainer', reducer });
  useInjectSaga({ key: 'tagContainer', saga });

  useEffect(() => {
    if (!isFirstLoading) {
     onLoadPage();
    }
  }, []);

  let Component = () => (
    <TagList items={items} loading={loading}/>
  );

  if (usePost) {
    Component = () => (
      <PostTagList item={item} items={items} />
    )
  }

  return <Component />;
}

TagContainer.propTypes = {
  item: PropTypes.object,
  usePost: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items: makeTagItems(),
  loading: makeLoading(),
  isFirstLoading: makeIsFirstLoading(),
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
)(TagContainer);
