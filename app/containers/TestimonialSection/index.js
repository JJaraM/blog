/**
 * Component that will render the testimionals
 *
 * @author Jonathan Jara Morales
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
  const key = 'testimonialSection';

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <SecondarySection>
      <SectionTitle
        topDescription={
          <FormattedMessage {...messages.subTitle} />
        }
        title={
          <FormattedMessage {...messages.header} />
        }
      />

      <TestimonialList items={items} loading={loading} />

      <ContainerCenter>
        <ArrowButton onClick={onPrevious} direction="left" />
        <ArrowButton onClick={onNext} direction="right" />
      </ContainerCenter>
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
