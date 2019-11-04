import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PostPage from 'containers/PostPage';
import Header from 'components/Header';
import Footer from 'components/Footer';
import GlobalStyle from '../../global-styles';
import { open, close } from './actions';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { compose } from 'redux';
import reducer from './reducer';
import { useInjectReducer } from 'utils/injectReducer';
import { makeSearchable }  from './selectors';
import SearchContainer from '../SearchContainer';

import './styles/variables.scss';
import './styles/scrollbar.scss';
import './styles/base.scss';
import './styles/sanitize.scss';

const key = 'home';

export function App({
  onSearch,
  onClose,
  render
}) {
  useInjectReducer({ key, reducer });

  return (
    <>
      <Helmet
        titleTemplate="%s - Jonathan Jara Morales"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header onClick={onSearch} /> 
      
      <SearchContainer render={render} close={onClose} />
    
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/post/:id" component={PostPage} />
        
        <Route path="/features" component={FeaturePage} />
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
  render: makeSearchable(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onSearch: () => dispatch(open()),
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
