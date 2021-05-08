import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoadingContainer from '../../components/LoadingContainer';
import LoadingLine from '../../components/LoadingLine';


function CardInfoTitle(props) {

  if (props.loading) {
    let height = 40;

    if (props.small) {
      height = 15;
    }

    let lines = <LoadingLine width={100} height={height} widthUnit="%" unit="px"
                   primaryBgColor="jjara-loading-primary-title-bg-color "
                   secondaryBgColor="jjara-loading-secondary-title-bg-color" />;

    if (props.lines) {
      lines = [...Array(props.lines).keys()]
        .map(x => <LoadingLine randomWidthMax={200} height={height} widthUnit="px" unit="px"
           primaryBgColor="jjara-loading-primary-title-bg-color "
           secondaryBgColor="jjara-loading-secondary-title-bg-color" />
        );
    }

    return (
      <LoadingContainer>
        { lines }
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

CardInfoTitle.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  loading: PropTypes.bool,
  small: PropTypes.bool,
  lines: PropTypes.number,
};

export default memo(CardInfoTitle);
