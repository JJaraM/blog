import React from 'react';
import PropTypes from 'prop-types';

function SocialItem(props) {

  return (
    <li className="footer_social_google">
        <a target="_blank" href={props.link}>
            <i className={props.className} aria-hidden="true"></i>
        </a>
    </li>
  );
}

SocialItem.propTypes = {
    link: PropTypes.string,
    className: PropTypes.string,
};
  

export default SocialItem;
