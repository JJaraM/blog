import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { accept, denied, verify } from './actions';
import { acknowledge } from './selectors';
import { loading } from '../App/actions';

export function CookieBanner({
  onAccept,
  onDenied,
  onLoad,
  onEnter,
  onMinimize,
  onMaximize,
  acknowledge,
}) {
  useEffect(() => {}, []);
  useInjectReducer({ key: 'cookieBanner', reducer });
  useInjectSaga({ key: 'cookieBanner', saga });

  useEffect(() => {
    onLoad();
  }, []);

  if (acknowledge) {
    return null;
  }

  return (
    <>
      <div id="terminal" className="cookie-banner">
        <div>
          <button onClick={onMinimize}>[-]</button>
          <button onClick={onMaximize}>[+]</button>
        </div>

        <div id="console-results" className="cookie-banner-body">
          <div id="console-header">
            The following command line interface is created to make possible to change the
            configuration of this application =====================================================
            {/* <br /> */}
            {/* | Cookies and IP addresses */}
            {/* allow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| */}
            {/* <br /> */}
            {/* | to deliver and improve our web */}
            {/* content&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<br /> */}
            {/* | and to provide you with a personalized experience |<br /> */}
            {/* | Our website uses cookies and */}
            {/* collects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |<br /> */}
            {/* | your IP address for these */}
            {/* purposes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| */}
            {/* <br /> */}
            {/* | <button onClick={onAccept}>[Y]es, I agree</button>{' '} */}
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{' '} */}
            {/* <button onClick={onDenied}>[N]o, I love my privacy |</button> */}
            <br />| In order to see the available commands enter the &nbsp; | | command `help`
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | =====================================================
          </div>
          <div id="console-prompt">
            <label>~&nbsp;root: </label>
            <input type="text" onKeyDown={onEnter} />
          </div>
          <div id="output-commands" className="console" />
        </div>
      </div>
    </>
  );
}
CookieBanner.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  acknowledge: acknowledge(),
});

const onCommandEnter = (evt, dispatch) => {
  if (evt.key === 'Enter' && evt.target.value.length > 0) {
    let result = [];
    const { value } = evt.target;

    switch (value) {
      case 'help':
        result = [
          'clear favourites: Clear the favourites from memory',
          'infinite loading: Makes that the page load infinitive',
          'infinite loading cancel: Cancel the infinitive loading of the page',
        ];
        break;
      case 'infinite loading':
        dispatch(loading(true));
        break;
      case 'infinite loading cancel':
        dispatch(loading(false));
        break;
      case 'clear':
        break;
      default:
        result = [`Command ${evt.target.value} not found`];
        break;
    }
    const element = document.getElementById('output-commands');

    if (value === 'clear') {
      const header = document.getElementById('console-header');
      while (header.firstChild) {
        header.firstChild.remove();
      }
      const myNode = document.getElementById('console-prompt');
      while (myNode.firstChild) {
        myNode.firstChild.remove();
      }
      const output = document.getElementById('output-commands');
      while (output.firstChild) {
        output.firstChild.remove();
      }
    } else {
      if (value === 'help') {
        const label = document.createElement('Label');
        label.setAttribute('for', '');
        label.innerHTML = 'Commands: ';
        element.appendChild(label);
      }

      result.forEach(r => {
        const p = document.createElement('p');
        const node = document.createTextNode(r);
        p.appendChild(node);
        element.appendChild(p);
      });
    }

    const label = document.createElement('Label');
    label.setAttribute('for', '');
    label.innerHTML = '~&nbsp;root: ';
    element.appendChild(label);

    const id = _.uniqueId('console-');
    const textNode = document.createElement('input');
    textNode.setAttribute('type', 'text');
    textNode.setAttribute('id', id);
    textNode.classList.add('full-width');
    textNode.onkeydown = function(evt1) {
      onCommandEnter(evt1, dispatch);
    };
    element.appendChild(textNode);
    textNode.focus();

    console.log(textNode);
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(verify()),
    onAccept: () => dispatch(accept()),
    onDenied: () => dispatch(denied()),
    onMinimize: () => {
      const el = document.getElementById('terminal');
      el.classList.add('cookie-banner-minimized');
    },
    onMaximize: () => {
      const el = document.getElementById('terminal');
      el.classList.remove('cookie-banner-minimized');
    },
    onEnter: evt => {
      onCommandEnter(evt, dispatch);
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
)(CookieBanner);
