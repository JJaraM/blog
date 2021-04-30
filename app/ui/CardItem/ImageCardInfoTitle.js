import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingContainer from '../../components/LoadingContainer';
import LoadingLine from '../../components/LoadingLine';


function ImageCardInfoTitle(props) {

  if (props.loading) {
    return (
      <LoadingContainer>
        <LoadingLine width={100} height={40} widthUnit="%" unit="px"
                     primaryBgColor="jjara-loading-primary-title-bg-color "
                     secondaryBgColor="jjara-loading-secondary-title-bg-color" />
      </LoadingContainer>
    )
  }

  return (
    <h2 className="main-title-color">
      <Link to={ props.href }>
        { props.title }
      </Link>
    </h2>
  );
}

ImageCardInfoTitle.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool
};

export default memo(ImageCardInfoTitle);
