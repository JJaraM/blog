/**
 * Component that will be used to display my personal information.
 */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Me from 'images/Me.jpg';
import './style.scss';

function Welcome() {

  const image = '/Home2.jpeg';

  return (
    <div>
      <div className="container-welcome" style={{backgroundImage: `url(${image})`}}>
      <div className="image-overlay"></div>
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
              <p><FormattedMessage {...messages.workTitle} /></p>
          </div>
        </div>

        <ul className="social-media-welcome">
          <li><a target="_blank" href="https://github.com/JJaraM"><i className="fa fa-github" aria-hidden="true"></i></a></li>
          <li><a target="_blank" href="https://www.linkedin.com/in/jonathan-jara-morales"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
    </div>

    <div className="footer-welcome download-cv">
      <div>
        <span>
          <i className="fa fa-download"></i>
          <FormattedMessage {...messages.download} />
        </span>
      </div>
    </div>
  </div>
  );
}

export default memo(Welcome);
