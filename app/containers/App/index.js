import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { compose } from 'redux';

import { default as reducer } from './reducer';
import saga from './saga';


import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PostPage from 'containers/PostPage';
import CategoryPage from 'containers/CategoryPage';

import SignIn from 'containers/SignIn';
import SearchContainer from 'containers/SearchContainer';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { makeIsAuthenticated } from 'containers/SignIn/selectors';
import { makeRenderSearch, makeRenderSignIn }  from './selectors';

import { signOut } from 'containers/SignIn/actions';

import { search, close, signIn, createPost } from './actions';

import './styles/variables.scss';
import './styles/scrollbar.scss';
import './styles/base.scss';
import './styles/sanitize.scss';

const key = 'home';

export function App({
  onSearch,
  onSignIn,
  onSignOut,
  onPostCreate,
  onClose,
  onClear,
  renderSearch,
  renderSignIn,
  isAuthenticated,
}) {

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <>
      <Helmet titleTemplate="%s - Jonathan Jara Morales" defaultTitle="Jonathan Jara Morales">
        <meta name="description" content="Personal Site of Jonathan Jara Morales" />
      </Helmet>

      <Header
        isAuthenticated={ isAuthenticated }
        onSearch={ onSearch }
        onSignIn={ onSignIn }
        onSignOut={ onSignOut }
        onPostCreate = { onPostCreate }
        />

      <SearchContainer render={renderSearch} close={onClose} />
      <SignIn render={renderSignIn} close={onClose} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      {/*
        <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div>
      */}
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
    onClose: () => {
      dispatch(close());
    },
    onPostCreate: () => dispatch(createPost()),
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
