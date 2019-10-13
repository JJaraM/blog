/**
 *
 * TestimonialItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTestimonialItem from './selectors';
import reducer from './reducer';
import saga from './saga';

export function TestimonialItem(props) {
  useInjectReducer({ key: 'testimonialItem', reducer });
  useInjectSaga({ key: 'testimonialItem', saga });

  const { item } = props;

  return (
    <div className="card">
      <div className="testimonials">
        <div className="d-flex justify-content-center mt-30">
          <img src={item.img} class="img-circle " alt="..." />
        </div>
        <div className="mb-30 mr-30 ml-30">
          <div class="post-text">
            <h3 class="main-title-color">
              <a href="https://indieground.net/blog/weekly-inspiration-dose-078/">{item.name}</a>
            </h3>
            <div class="meta-data">
              <span>{item.title}</span>
              <span>October 8, 2019</span>
            </div>
            <div class="description">
                <p>{item.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

TestimonialItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  testimonialItem: makeSelectTestimonialItem(),
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
)(TestimonialItem);
