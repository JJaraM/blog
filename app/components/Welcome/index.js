/**
 *
 * Welcome
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import ContainerCenter from 'components/ContainerCenter';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Me from 'images/Me.jpg';
import './style.scss';

function Welcome() {
  return (
    <div>


      <div className="container-welcome">



        <div className="box">

        <div className="welcome-about-me">
        <img src={Me} className="about-me img-circle " />
      </div>

            <div className="title">
                <span className="block"></span>
                <h1>Jonathan Jara Morales<span></span></h1>
            </div>

            <div className="role">
                <div className="block"></div>
                <p>Software Engineer</p>
            </div>

        </div>
    </div>

    <a href="https://youtu.be/7d2XsPSjjjI" target="_blank">
      <div className="footer-welcome">
        <div className="texto">
            <span>
              <i className="fa fa-download"></i>
              Download CV
            </span>
        </div>
      </div>
    </a>
  </div>
  );
}

Welcome.propTypes = {};

export default memo(Welcome);
