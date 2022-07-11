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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'components/Container';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeIsAuthenticated } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { changeUsername, changePassword, signIn } from './actions';
import ContainerCenter from 'components/ContainerCenter';
import PrincipalTitle from 'components/PrincipalTitle';
import Button from 'ui/Button';
import ButtonClose from 'ui/Button/ButtonClose'

import TextInput from 'ui/Input/TextInput';
import PasswordInput from 'ui/Input/PasswordInput';
import './style.scss';

export function SignIn({
  render,
  close,
  isAuthenticated,
  onChangeUsername,
  onChangePassword,
  onSignIn,
}) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  //Close the window if the user was able to do the authentication
  if (isAuthenticated) {
    close();
  }

  if (render) {
    const element = document.getElementsByClassName('fontLoaded')[0];
    if (element) {
      element.style.overflow = 'hidden';
    }

    return (
      <div className="search-container">

        <ButtonClose onClick={close} />

        <div className="row h-100">
          <div className="col-sm-12 my-auto">
            <Container>
              <ContainerCenter>
                <PrincipalTitle
                  center={true}
                  title={<FormattedMessage {...messages.header} />}
                  divider={true}
                  bottomDescription={<FormattedMessage {...messages.description} />}
                />
              </ContainerCenter>
            </Container>

            <div className="pb-30">
              <Container>
                <ContainerCenter>
                  <div className="metadata-fields">
                    <TextInput onChange={onChangeUsername} placeholder="Username" />
                    <PasswordInput onChange={onChangePassword} placeholder="Password" />
                    <Button
                      className="signIn-button"
                      containerClassName="signIn-button-container"
                      onClick={onSignIn}
                    >
                      <FormattedMessage {...messages.signIn} />
                    </Button>
                  </div>
                </ContainerCenter>
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: makeIsAuthenticated(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onSignIn: () => {
      dispatch(signIn());
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
)(SignIn);
