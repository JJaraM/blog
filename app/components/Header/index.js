import React from 'react';
import Logo from 'components/Logo';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import RenderComponent from 'components/RenderComponent';
import { Nav } from './Nav';
import messages from './messages';
import ButtonIcon from './ButtonIcon';
import MenuLabel from './MenuLabel';
import MenuDropDown from './MenuDropDown';
import MenuDropDownContainer from './MenuDropDownContainer';
import MenuOption6Col from './MenuOption6Col';
import MenuOption from './MenuOption';

import './style.scss';
import { Link } from 'react-router-dom';

function Header(props) {
  const theme = localStorage.getItem('theme');
  let iconClass = 'fa fa-moon-o';

  if (theme == 'dark') {
    iconClass = 'fa fa-sun-o';
  }
  if (theme == 'light') {
    iconClass = 'fa fa-moon-o';
  }

  return (
    <header id="header" className="jjara-max-container">
      <Nav>
        <div className="container">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo01">
            <ul id="ul-menu" className="navbar-nav ml-auto ">
              {/* <li className="nav-item active">
                <Link to={`/cases-study-1`} className="nav-link">
                  <FormattedMessage {...messages.cases_of_study} />
                </Link>
              </li> */}

              <li className="nav-item active dropdown">
                <MenuLabel onClick={props.onMenuClick}>
                  <FormattedMessage {...messages.cases_of_study} />
                </MenuLabel>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link to="/cases-study-1" className="dropdown-item">
                    <FormattedMessage {...messages.cases_of_study_cloud_services} />
                  </Link>
                </div>
              </li>

              <MenuOption render={!props.isAuthenticated}>
                <MenuLabel onClick={props.onMenuClick}>Sign In</MenuLabel>
                <MenuDropDown>
                  <MenuDropDownContainer>
                    <MenuOption6Col onClick={props.onSignIn} title="Sign In With" label="User" />
                    <MenuOption6Col onClick={props.onSignIn} title="Sign In With" label="Gmail" />
                  </MenuDropDownContainer>
                  {/* <div className="dropdown-divider"></div> */}
                </MenuDropDown>
              </MenuOption>

              <RenderComponent render={props.isAuthenticated}>
                <li className="nav-item active dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <FormattedMessage {...messages.post} />
                  </a>

                  <div
                    className="dropdown-menu dropdown"
                    aria-labelledby="navbarDropdown"
                    onClick={props.onPostCreate}
                  >
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

            {/* <ButtonIcon */}
            {/*  className="fa fa-user" */}
            {/*  onClick={props.onSignIn} */}
            {/*  render={!props.isAuthenticated} */}
            {/* /> */}
            <ButtonIcon id="theme" className={iconClass} onClick={props.onSwitchTheme} />
            <ButtonIcon
              className="fa fa-sign-out"
              onClick={props.onSignOut}
              render={props.isAuthenticated}
            />
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
  isAuthenticated: PropTypes.bool,
  onDarkMode: PropTypes.func,
  onLightMode: PropTypes.func,
  onMenuClick: PropTypes.func,
};

export default Header;
