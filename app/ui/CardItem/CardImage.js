import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingLine from '../../components/LoadingLine';
import LoadingContainer from '../../components/LoadingContainer';


function CardImage(props) {
  let image = props.image;
  if (image === null) {
    image = '/PostImageNotFound.png';
  }

  if (props.loading) {
    return (
      <LoadingContainer>
        <LoadingLine width={100} height={100} widthUnit="%" unit="%" />
      </LoadingContainer>
    );
  }

  return (
    <Link to={props.href}>
      <div className="img-elementor" style={{backgroundImage: `url(${image})`}}>
        { props.children }
      </div>
    </Link>
  );
}

CardImage.propTypes = {
  image: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
};

export default memo(CardImage);
