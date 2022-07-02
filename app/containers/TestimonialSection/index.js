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

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import TestimonialList from 'components/TestimonialList';
import SectionTitle from 'components/SectionTitle';
import SecondarySection from 'components/SecondarySection';
import ContainerCenter from 'components/ContainerCenter';
import ArrowButton from 'components/ArrowButton';
import { retrieve, next, previous } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeItems, makeLoading } from './selectors';
import messages from './messages';
import './style.scss';

export function TestimonialSection({ items, loading, onLoadPage, onNext, onPrevious }) {
  // Injection of the components
  const key = 'testimonialSection';
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  // On the page load we are going to request the testimonials data
  useEffect(() => {
    onLoadPage();
  }, []);

  // The Pagination is going to be render only if there are data visible
  let Pagination = () => null;
  if (items.length > 0) {
    Pagination = () => (
      <ContainerCenter>
        <ArrowButton onClick={onPrevious} direction="left" />
        <ArrowButton onClick={onNext} direction="right" />
      </ContainerCenter>
    );
  }

  return (
    <SecondarySection>
      <SectionTitle
        topDescription={<FormattedMessage {...messages.subTitle} />}
        title={<FormattedMessage {...messages.header} />}
      />
      <TestimonialList items={items} loading={loading} />
      <Pagination />
    </SecondarySection>
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
