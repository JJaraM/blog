/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import LatestPostSection from 'containers/LatestPostSection';
import RecommendationPostSection from 'containers/RecommendationPostSection';
import TestimonialSection from 'containers/TestimonialSection';
import AboutMeSection from 'containers/AboutMeSection';
import Welcome from 'components/Welcome';
import Project from '../Project';

const key = 'home';

export function HomePage({

}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {

  }, []);


  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Personal Blog Site" />
      </Helmet>

      {/* <Welcome /> */}


      <LatestPostSection />
      <RecommendationPostSection />
      <TestimonialSection/>
      {/*<Project />
     <AboutMeSection /> */}

    </>
  );


};

const mapStateToProps = createStructuredSelector({

});

export function mapDispatchToProps(dispatch) {
  return {

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
