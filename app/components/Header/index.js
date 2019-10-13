import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner1.jpg';
import messages from './messages';

import './style.scss';

function Header() {

  const logo = '{JJARA}';
  return (
    <>
    <div className="home_slinder">
      <div className="owl-carousel owl-theme owl-loaded">
        <div className="owl-item">
          <div className="home_slider_background home_background_mask">
        
            <div className="home_slider_content_container">
            
              <div className="principal-title mb-30 mt-30">
                <h1>
                { logo }
                </h1>
                <div class="brief-description">
                  I am a software developer who loves creates new apps.
                </div>
              </div>

              <div>

                <button className="btn">
                  Hire me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

     
      {/*<NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/features">
          <FormattedMessage {...messages.features} />
        </HeaderLink>
      </NavBar>
    */ }
    </>
  );
}

export default Header;
