import React from 'react';
import { Nav } from './Nav';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RenderComponent from 'components/RenderComponent';
import ButtonIcon from './ButtonIcon';

import './style.scss';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    <header id="header" className="jjara-max-container">
      <Nav>
        <div className="container-fluid">
          <Logo />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>


          <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo01">
            <ul className="navbar-nav ml-auto ">



              {/*<li className="nav-item active">
                <Link to={`/cases-study-1`} className="nav-link">
                  <FormattedMessage {...messages.cases_of_study} />
                </Link>
              </li> */}

              <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                   role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <FormattedMessage {...messages.cases_of_study} />
                </a>

                <div className="dropdown-menu"
                     aria-labelledby="navbarDropdown">

                  <Link to={`/cases-study-1`} className="drop-down-item">
                    <FormattedMessage {...messages.cases_of_study_cloud_services} />
                  </Link>

                  {/* <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>   */}
                </div>
              </li>


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

            <ButtonIcon className="fa fa-search" onClick={props.onSearch} />
            <ButtonIcon className="fa fa-user" onClick={props.onSignIn} render={!props.isAuthenticated} />
            <ButtonIcon className="fa fa-sign-out" onClick={props.onSignOut} render={props.isAuthenticated} />

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
