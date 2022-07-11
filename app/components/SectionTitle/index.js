import React, { memo } from 'react';
import PropTypes from 'prop-types';

function SectionTitle(props) {
  return (
    <div className="principal-title pb-30 pt-30">
      <div className="container d-flex justify-content-center">
        <div className="jjara-principal-title-brief-description">
          { props.topDescription }
        </div>
      </div>
      <div className="container  d-flex justify-content-center">
        <h1>
          { props.title }
        </h1>
      </div>
      <div className="container d-flex justify-content-center">
        <div className="elementor-divider">
          <div className="elementor-divider-separator"></div>
        </div>
      </div>
    </div>
  );
}

SectionTitle.propTypes = {
  topDescription : PropTypes.object,
  title: PropTypes.object.isRequired,
};

export default memo(SectionTitle);
