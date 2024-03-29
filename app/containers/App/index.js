import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PostPage from 'containers/PostPage';
import CategoryPage from 'containers/CategoryPage';

import SignIn from 'containers/SignIn';
import SpyCode from 'containers/SpyCode';

import Header from 'components/Header';
import Footer from 'components/Footer';
import CaseOfStudy1 from 'containers/CaseOfStudy1';

import { makeIsAuthenticated } from 'containers/SignIn/selectors';
import { signOut } from 'containers/SignIn/actions';
import { makeRenderSearch, makeRenderSignIn, makeRenderSpy } from './selectors';

import saga from './saga';
import { default as reducer } from './reducer';
import GlobalStyle from '../../global-styles';

import { search, close, signIn, createPost, spy } from './actions';

import './styles/theme/theme.scss';
import './styles/app.scss';

import './styles/variables.scss';
import './styles/scrollbar.scss';
import './styles/base.scss';
import './styles/sanitize.scss';
import CookieBanner from '../CookieBanner';
import SearchContainer from '../SearchContainer';
const key = 'home';

function showOverflow() {
  const element = document.getElementsByClassName('fontLoaded')[0];
  if (element) {
    element.style.overflow = 'auto';
  }
}

export function App({
  onSearch,
  onSignIn,
  onSignOut,
  onPostCreate,
  onClose,
  onSpyCode,
  onSwitchTheme,
  onMenuClick,
  renderSearch,
  renderSignIn,
  renderSpyCode,
  isAuthenticated,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  let currentTheme = localStorage.getItem('theme');
  if (currentTheme === undefined || currentTheme == null) {
    currentTheme = 'dark';
  }
  document.documentElement.setAttribute('data-theme', currentTheme);

  return (
    <>
      <Helmet titleTemplate="%s - Jonathan Jara Morales" defaultTitle="Jonathan Jara Morales">
        <meta name="description" content="Personal Site of Jonathan Jara Morales" />
      </Helmet>

      <Header
        isAuthenticated={isAuthenticated}
        onSearch={onSearch}
        onSignIn={onSignIn}
        onSignOut={onSignOut}
        onPostCreate={onPostCreate}
        onSwitchTheme={onSwitchTheme}
        onMenuClick={onMenuClick}
      />

      <SearchContainer render={renderSearch} close={onClose} />
      <SignIn render={renderSignIn} close={onClose} />
      <SpyCode render={renderSpyCode} close={onClose} />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        <Route exact path="/category/:id" component={CategoryPage} />
        <Route exact path="/cases-study-1" component={CaseOfStudy1} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      {/* <div className="lmpixels-scroll-to-top"><i className="lnr lnr-chevron-up"></i></div> */}

      <CookieBanner />
      <Footer onSpyCode={onSpyCode} />

      <GlobalStyle />
    </>
  );
}

App.propTypes = {
  onSearch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  renderSearch: makeRenderSearch(),
  renderSignIn: makeRenderSignIn(),
  renderSpyCode: makeRenderSpy(),
  isAuthenticated: makeIsAuthenticated(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearch: () => dispatch(search()),
    onSpyCode: () => dispatch(spy()),
    onSignIn: () => {
      dispatch(signIn());
    },
    onSignOut: () => {
      showOverflow();
      dispatch(signOut());
    },
    onClose: () => {
      showOverflow();
      dispatch(close());
    },
    onMenuClick: e => {
      const sibling = e.target.nextSibling;
      sibling.classList.add('show');
      sibling.classList.add('selected');
      document.getElementById('main-container').classList.add('menu-open');
      // display: block;
      console.log();
      console.log('menu clicked');
    },
    onPostCreate: () => dispatch(createPost()),
    onSwitchTheme: () => {
      let currentTheme = localStorage.getItem('theme');
      const themeElement = document.getElementById('theme');

      if (currentTheme == 'dark') {
        currentTheme = 'light';
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (themeElement) {
          themeElement.classList.add('fa-moon-o');
          themeElement.classList.remove('fa-sun-o');
        }
      } else {
        currentTheme = 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (themeElement) {
          themeElement.classList.remove('fa-moon-o');
          themeElement.classList.add('fa-sun-o');
        }
      }
      localStorage.setItem('theme', currentTheme);
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
)(App);
