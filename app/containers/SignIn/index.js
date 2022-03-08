/**
 * View used to handle the user authentication and authorization.
 *
 * @author Jonathan Jara Morales
 * @since 2020-05-03
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
import './style.scss';

export function SignIn({
  render,
  close,
  isAuthenticated,
  onChangeUsername,
  onChangePassword,
  onSignIn
}) {
  useInjectReducer({ key: 'signIn', reducer });
  useInjectSaga({ key: 'signIn', saga });

  //Close the window if the user was able to do the authentication
  if (isAuthenticated) {
    close();
  }

  if (render) {
    const element = document.getElementsByClassName("fontLoaded")[0];
    if (element) {
      element.style.overflow = 'hidden';
    }

    return (
      <div className="search-container">
        <Container>
          <div className="btn-close">
            <button className="btn-search fa fa-close" onClick={close}></button>
          </div>
        </Container>

        <div className="row h-100">
          <div className="col-sm-12 my-auto">

            <Container>
              <ContainerCenter>
                <PrincipalTitle center={true}
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
                    <input id="language" type="text" className="search" placeholder="Username" onChange={onChangeUsername} />
                    <input type="password" id="password" className="search" placeholder="Password" onChange={onChangePassword} />
                    <Button className="signIn-button" containerClassName="signIn-button-container" onClick={onSignIn}>
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
  return (<div></div>);
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
