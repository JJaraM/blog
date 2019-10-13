import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';;
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItems, makeLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { retrieve, next, previous } from './actions';
import TestimonialList from 'components/TestimonialList';
import SectionTitle from 'components/SectionTitle';

export function TestimonialSection({
  items,
  loading,
  onLoadPage,
  onNext,
  onPrevious,
}) {
  useInjectReducer({ key: 'testimonialSection', reducer });
  useInjectSaga({ key: 'testimonialSection', saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <div className="secondary-bg-color mt-30">

        
        <SectionTitle 
          topDescription={
            <FormattedMessage {...messages.subTitle} />
          }
          title={
            <FormattedMessage {...messages.header} />
          }
        />
        
        <TestimonialList items={items} loading={loading} />
      
        <div className="d-flex justify-content-center mb-30">
            <div className="button-container">
              <span className="circle-button page-numbers" onClick={onPrevious}>
                <svg className="slinder-arrow-svg slinder-left-arrow" 
                  x="0px" 
                  y="0px" 
                  width="16px" 
                  height="16px" 
                  viewBox="0 0 7 12" 
                  enable-background="new 0 0 7 12">
                    <polyline fill="var(--main-title-color)" 
                    points="0,5.61 5.609,0 7,0 7,1.438 2.438,6 7,10.563 7,12 5.609,12 -0.002,6.39 "></polyline>
                </svg>

              </span>
            </div>   
            <div className="button-container" onClick={onNext}>
              <span className="circle-button page-numbers">
              <svg class="slinder-arrow-svg slinder-right-arrow" 
                x="0px" 
                y="0px" 
                width="16px" 
                height="16px" 
                viewBox="0 0 7 12" 
                enable-background="new 0 0 7 12">
                  <polyline  fill="var(--main-title-color)" points="6.998,6.39 1.389,12 -0.002,12 -0.002,10.562 4.561,6 -0.002,1.438 -0.002,0 1.389,0 7,5.61 "></polyline>
              </svg>
              </span>
            </div>      
          </div>
          
        </div>
  );
}

TestimonialSection.propTypes = {
  onLoadPage: PropTypes.func,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
  loading: makeLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onNext: () => dispatch(next()),
    onPrevious: () => dispatch(previous()),
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
)(TestimonialSection);
