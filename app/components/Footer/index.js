import React from 'react';
import Logo from 'components/Logo';
import SocialItem from './SocialItem';
import LocaleToggle from 'containers/LocaleToggle';
import Button from 'ui/Button';
import './style.scss';
import PropTypes from 'prop-types';

function Footer(props) {

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="center">
        <div className="container">
          <div className="row footer_center ">
            <div className="footer-logo-box">
              <div className="footer_logo">
                <Logo />
              </div>
              <div className="footer_social">
                <ul>
                  <SocialItem link="https://www.linkedin.com/in/jonathan-jara-morales" className="fa fa-linkedin" />
                  <SocialItem link="https://github.com/JJaraM" className="fa fa-github" />
                  <SocialItem link="https://www.youtube.com/channel/UCjqLariAG_i0jwzlxMSwUDQ" className="fa fa-youtube" />
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="bottom">
          © COPYRIGHT jjara 2019 - { year } ALL RIGHTS RESERVED.
          <br />Project Build using React and spring cloud
          <section>
            <LocaleToggle />
            <Button id='btn-stackTrace' onClick={props.onSpyCode}>
              Spy this code?
            </Button>
          </section>
       </div>

    </footer>
  );
}

Footer.propTypes = {
  onSpyCode: PropTypes.func,
}

export default Footer;
