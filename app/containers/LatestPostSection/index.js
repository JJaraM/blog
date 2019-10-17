import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItems, makeLoading, makeIsFirstLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import LatestPostItemList from 'components/LatestPostItemList';
import { retrieve, retrieveMore } from './actions';
import TagContainer from 'containers/TagContainer';

export function LatestPostSection({
  items,
  loading,
  isFirstLoading,
  onLoadPage,
  onViewMore,
}) {
  useInjectReducer({ key: 'latestPostSection', reducer });
  useInjectSaga({ key: 'latestPostSection', saga });

   useEffect(() => {
     if (!isFirstLoading) {
      onLoadPage();
     }
  }, []);

  return (
    <div className="secondary-bg-color">

      <div className="principal-title mb-30 mt-30">
        <div className="container  d-flex justify-content-center">
          <h1>Lastest Posts</h1>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="elementor-divider">
            <div className="elementor-divider-separator"></div>
          </div>
        </div>
        <div className="container  d-flex justify-content-center">
          <div className="brief-description">
            In the below section you will find the most important post in the last month
          </div>
        </div>
        <div className="container d-flex justify-content-center">
          <TagContainer />
        </div>
      </div>

      <LatestPostItemList items={items} loading={loading}/>

      <div className="container  d-flex justify-content-center mb-30">
        <button className="btn " onClick={onViewMore}>
          View More
        </button>
      </div>
    </div>
  );
}

LatestPostSection.propTypes = {
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
  loading: makeLoading(),
  isFirstLoading: makeIsFirstLoading(),
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
