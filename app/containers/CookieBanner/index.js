import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { accept, denied, toggle, verify } from './actions';
import { acknowledge, makeTerminalMinimized } from './selectors';
import { loading } from '../App/actions';

export function CookieBanner({
  onLoad,
  onEnter,
  onMinimize,
  onMaximize,
  acknowledge,
  isTerminalMinimized,
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

  const MenuOption = () => {
    return isTerminalMinimized ? (
      <button onClick={onMaximize}>[-]</button>
    ) : (
      <button onClick={onMinimize}>[+]</button>
    );
  };

  return (
    <>
      <div id="terminal" className="terminal-window terminal-window-minimized">
        <div>
          <MenuOption />
        </div>

        <div id="console-results" className="terminal-window-body">
          <div id="console-header" className="terminal-output">

            Accessing the terminal to see the available commands enter the command {' '}
            <label className="root">help </label>
          </div>
          <div id="console-prompt" className="terminal">
            <label className="root">~root</label>
            <label className="root">@jonathan.jara.morales $ </label>
            <label className="root">&nbsp;</label>
            <div className="terminal-prompt" />
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
  isTerminalMinimized: makeTerminalMinimized(),
});

const onCommandEnter = (evt, dispatch) => {
  if (evt.key === 'Enter' && evt.target.value.length > 0) {
    let result = [];
    const { value } = evt.target;

    switch (value) {
      case 'help':
        result = ['clear favourites,' + 'infinite loading,' + 'infinite loading cancel,' + 'clear'];
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
        label.innerHTML = 'Usage: help <';
        label.innerHTML = label.innerHTML + 'command>';
        element.appendChild(label);

        const space = document.createElement('div');
        space.setAttribute('class', 'terminal-break-line');
        element.appendChild(space);

        const where = document.createElement('Label');
        where.setAttribute('for', '');
        where.innerHTML = 'Where <';
        where.innerHTML = where.innerHTML + 'command> ';
        where.innerHTML = where.innerHTML + 'is one of the following:';
        element.appendChild(where);
      }

      result.forEach(r => {
        const p = document.createElement('p');
        if (value === 'help') {
          p.setAttribute('class', 'terminal-space');
        }

        const node = document.createTextNode(r);
        p.appendChild(node);
        element.appendChild(p);
      });
    }

    const label = document.createElement('Label');
    label.setAttribute('for', '');
    label.setAttribute('class', 'root');
    label.innerHTML = '~root@jonathan.jara.morales $&nbsp;';
    element.appendChild(label);

    const id = _.uniqueId('console-');
    const textNode = document.createElement('input');
    textNode.setAttribute('type', 'text');
    textNode.setAttribute('id', id);
    textNode.onkeydown = function(evt1) {
      onCommandEnter(evt1, dispatch);
    };
    element.appendChild(textNode);
    textNode.focus();
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(verify()),
    onAccept: () => dispatch(accept()),
    onDenied: () => dispatch(denied()),
    onMinimize: () => dispatch(toggle()),
    onMaximize: () => dispatch(toggle()),
    onEnter: evt => onCommandEnter(evt, dispatch),
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
