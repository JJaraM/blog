import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PostPage from 'containers/PostPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import { useInjectReducer } from 'utils/injectReducer';

import { makeIsAuthenticated } from 'containers/SignIn/selectors';
import { signOut } from 'containers/SignIn/actions';

import { search, close, signIn } from './actions';
import { makeRenderSearch, makeRenderSignIn }  from './selectors';
import SearchContainer from '../SearchContainer';
import SignIn from 'containers/SignIn';

import './styles/variables.scss';
import './styles/scrollbar.scss';
import './styles/base.scss';
import './styles/sanitize.scss';

const key = 'home';

export function App({
  onSearch,
  onSignIn,
  onSignOut,
  onClose,
  renderSearch,
  renderSignIn,
  isAuthenticated,
}) {
  useInjectReducer({ key, reducer });

  return (
    <>
      <Helmet titleTemplate="%s - Jonathan Jara Morales" defaultTitle="Jonathan Jara Morales">
        <meta name="description" content="Personal Site of Jonathan Jara Morales" />
      </Helmet>

      <Header 
        isAuthenticated={isAuthenticated} 
        onSearch={onSearch} 
        onSignIn={onSignIn} 
        onSignOut={onSignOut}/> 
      
      <SearchContainer render={renderSearch} close={onClose} />
      <SignIn render={renderSignIn} close={onClose} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      <Footer />
      
      <GlobalStyle />
    </>
  );
};

App.propTypes = {
  onSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  renderSearch: makeRenderSearch(),
  renderSignIn: makeRenderSignIn(),
  isAuthenticated: makeIsAuthenticated(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearch: () => dispatch(search()),
    onSignIn: () => dispatch(signIn()),
    onSignOut: () => dispatch(signOut()),
    onClose: () => dispatch(close()),
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
)(App);
