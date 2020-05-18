/**
 *
 * AboutMeSection
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectAboutMeSection from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import PrincipalTitle from 'components/PrincipalTitle';
import ContainerCenter from 'components/ContainerCenter';

import Me1 from 'images/Me1.jpg';

import './style.scss';

export function AboutMeSection() {
  useInjectReducer({ key: 'aboutMeSection', reducer });
  useInjectSaga({ key: 'aboutMeSection', saga });
 
  const diffYear = new Date().getFullYear() - 2012;

  return (
    <div className="main-bg-color pb-30">
      <PrincipalTitle 
        center={ true } 
        divider={ true }
        title={
          <FormattedMessage {...messages.header } />
        }
        topDescription = {
          <FormattedMessage {...messages.subTitle } />
        }
        bottomDescription={
          `I am Jonathan Jara Morales a software engineer with more than ${diffYear} working, who loves
          keep learning new languages, frameworks and creating different applications.
          `
        }
      />
      <ContainerCenter>
        <img src={Me1} className="about-me img-circle " />
      </ContainerCenter>
    </div>
  );
}

AboutMeSection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  aboutMeSection: makeSelectAboutMeSection(),
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
)(AboutMeSection);
