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
import './style.scss';


export function TestimonialItem({
  item,
  onError,
}) {
  useInjectReducer({ key: 'testimonialItem', reducer });
  useInjectSaga({ key: 'testimonialItem', saga });

  return (
    <div className="card">
      <div className="testimonials">
        <div className="d-flex justify-content-center pr-30 pl-30 ">
          <div className="testimonial-section-header d-flex justify-content-center  pt-30 pb-30 ">
            <img src={item.img}
                 className="img-circle "
                 onError={onError}
                 onError={(e)=>{e.target.onerror = null; e.target.src="/avatar.jpg"}}
            />
          </div>

        </div>
        <div className="pb-30 pr-30 pl-30">
          <div className="post-text">
            <h3 className="main-title-color">
              <a href="#">{item.name}</a>
            </h3>
            <div className="meta-data">
              <span>{item.title}</span>
              <span>October 8, 2019</span>
            </div>
            <div className="description">
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
  onError: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  testimonialItem: makeSelectTestimonialItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    onError: (evt) => {
      return "/avatar.jpg";
    },
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
