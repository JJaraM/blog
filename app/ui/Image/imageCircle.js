import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Image from './image';
import LoadingCircle from '../../components/LoadingCircle';

function ImageCircle(props) {

  if (props.loading) {
    return <LoadingCircle width={110} height={100}/>;
  }

  return (
    <Image src={props.src} className="img-circle" default="/avatar.jpg" />
  );
}

ImageCircle.propTypes = {
  src: PropTypes.string,
  loading: PropTypes.bool,
};

export default memo(ImageCircle);
