/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import history from 'utils/history';
//import 'sanitize.css/sanitize.css';
import './fonts/fonts.scss';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!./images/favicon.png';
import '!file-loader?name=[name].[ext]!./images/GitHub-Mark-Light-64px.png';
import '!file-loader?name=[name].[ext]!./images/avatar.jpg';
import '!file-loader?name=[name].[ext]!./images/PostImageNotFound.png';
import '!file-loader?name=[name].[ext]!./images/Home2.jpeg';
import '!file-loader?name=[name].[ext]!./images/architecture.svg';
import 'file-loader?name=.htaccess!./.htaccess'; // eslint-disable-line import/extensions

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() =>
      Promise.all([
        import('intl/locale-data/jsonp/en.js'),
        import('intl/locale-data/jsonp/de.js'),
      ]),
    ) // eslint-disable-line prettier/prettier
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

if (process.env.NODE_ENV !== "local") {
  if (window.location.protocol === 'http:') {
    const redirect = "https:" + window.location.host + window.location.pathname;
    window.location.replace(redirect);
  }
}

document.addEventListener("click", function (evt) {

  //dropdown-menu

  const menuClose = document.getElementsByClassName("dropdown-menu dropdown-menu-right selected");
  for (let i = 0; i < menuClose.length; i++) {
    const el = menuClose[i];

    if (el.classList.contains("show-menu")) {
      el.classList.remove("show");
      el.classList.remove("show-menu");
      el.classList.remove("selected");

      document.getElementById("main-container").classList.remove("menu-open")
    } else {
      el.classList.add("show-menu");
    }
  }
  // console.log("close =>" + menuClose.length);
  //
  // const menuOpen = document.getElementsByClassName("nav-item active dropdown show");
  // console.log("open =>" + menuOpen.length);

  // const el = document.getElementById("main-container");
  //
});

// document.getElementById("ul-menu").addEventListener("click",function(e) {
//   console.log('click menu')
//   if (e.target && e.target.matches("li.item")) {
//     const menuClose = document.getElementsByClassName("nav-item active dropdown");
//     console.log("close =>" + menuClose.length);
//
//     const menuOpen = document.getElementsByClassName("nav-item active dropdown show");
//     console.log("open =>" + menuOpen.length);
//   }
// });


