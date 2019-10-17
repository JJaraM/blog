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

export function TagContainer({
  items,
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

  return (
    <div id="tags-section" className="section_tags row justify-content-center align-self-center">
      <TagList items={items} loading={loading}/>
    </div>
  );
}

TagContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
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
