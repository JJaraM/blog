import React from 'react';
import { Nav } from './Nav';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RenderComponent from 'components/RenderComponent';

import './style.scss';

function Header(props) {

  return (
    <header id="header">
      <Nav>
        <div className="container">
          <Logo />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
         
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 {/*<li className="nav-item active">
                <a className="nav-link" href="#">Home 
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>*/}

              <RenderComponent render={ props.isAuthenticated }>
                <li className="nav-item active dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FormattedMessage {...messages.post} />
                  </a>
                  
                  <div className="dropdown-menu" 
                    aria-labelledby="navbarDropdown" 
                    onClick={ props.onPostCreate }>
                    
                    <a className="dropdown-item" href="#">
                      <FormattedMessage {...messages.post_create} />
                    </a>
                    
                    {/* <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>   */}
                  </div>
                </li> 
              </RenderComponent>
            </ul>
            
            <button className="btn-search fa fa-search" onClick={props.onSearch}></button>
            
            <RenderComponent render={!props.isAuthenticated}>
              <button className="btn-search fa fa-user" onClick={props.onSignIn}></button>
            </RenderComponent>

            <RenderComponent render={props.isAuthenticated}>
              <button className="btn-search fa fa-sign-out" onClick={props.onSignOut}></button>
            </RenderComponent>
           

          </div>
        </div>
      </Nav>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
  onSignIn: PropTypes.func,
  onSignOut: PropTypes.func,
  onPostCreate: PropTypes.func,
  isAuthenticated: PropTypes.bool
};

export default Header;
