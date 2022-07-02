/*
 *  Copyright 2022-present Jonathan Jara Morales
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import LatestPostSection from 'containers/LatestPostSection';
import RecommendationPostSection from 'containers/RecommendationPostSection';
import TestimonialSection from 'containers/TestimonialSection';

// Page component that keeps the order of the different contains that are going
// to be render in the home page
export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Jonathan Jara Morales" />
      </Helmet>
      {/* Displays the latest available post*/}
      <LatestPostSection />
      {/* Displays the posts with more views*/}
      <RecommendationPostSection />
      {/* Displays the testimonials about my person*/}
      <TestimonialSection />
    </>
  );
}

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
