import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItems } from './selectors';
import reducer from './reducer';
import saga from './saga';
import LatestPostItemList from 'components/LatestPostItemList';
import { retrieve } from './actions';

export function LatestPostSection({
  items,
  onLoadPage,
}) {
  useInjectReducer({ key: 'latestPostSection', reducer });
  useInjectSaga({ key: 'latestPostSection', saga });

  useEffect(() => {
    onLoadPage();
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
        <div className="container  d-flex justify-content-center">
          <div id="tags-section" className="section_tags">
            <ul>
              <li id="tag-0" className="active"><div className="tag-button">all</div></li>
              <li id="tag-0" className="active"><div className="tag-button">all</div></li>
              <li id="tag-0" className="active"><div className="tag-button">all</div></li>
              <li id="tag-0" className="active"><div className="tag-button">all</div></li>
            </ul>
          </div>
        </div>
      </div>
      <LatestPostItemList items={items} />

      <div className="container  d-flex justify-content-center mb-30">
        <button className="btn">
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
)(LatestPostSection);
