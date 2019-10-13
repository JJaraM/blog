import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DateField from 'components/DateField';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLatestPostItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';

export function LatestPostItem(props) {
  useInjectReducer({ key: 'latestPostItem', reducer });
  useInjectSaga({ key: 'latestPostItem', saga });

  const { item } = props;

  return (
      <div className="card">
        <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <div className="post-text">
            <h3 className="main-title-color">
              <a href="https://indieground.net/blog/weekly-inspiration-dose-078/">{item.title}</a>
            </h3>
            <div className="meta-data">
              <span>
                <DateField value={item.updateDate} />
              </span>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="tags">
              <span><a href="#">cisco</a></span>
              <span><a href="#">packet tracer</a></span>
              <span><a href="#">cisco</a></span>
            </div>
          </div>
        </div>
      </div>
    
  );
}

LatestPostItem.propTypes = {
  item: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  latestPostItem: makeSelectLatestPostItem(),
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
)(LatestPostItem);
