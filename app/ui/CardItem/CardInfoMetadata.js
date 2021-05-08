import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DateField from '../../components/DateField';
import Metadata from '../../components/Metadata';
import LoadingLine from '../../components/LoadingLine';
import LoadingContainer from '../../components/LoadingContainer';

function CardInfoMetadata(props) {

  if (props.loading) {
    return (
      <LoadingContainer>
        <LoadingLine width={20} height={10} widthUnit="%" unit="px"
                     primaryBgColor="jjara-loading-primary-date-metadata-bg-color "
                     secondaryBgColor="jjara-loading-secondary-date-metadata-bg-color" />
      </LoadingContainer>
    )
  }

  let title = null;
  if (props.title) {
    title = <span>{ props.title} </span>
  }

  return (
    <Metadata>
       <span>
         { title }
        <DateField value={props.date} />
      </span>
    </Metadata>
  );
}

CardInfoMetadata.propTypes = {
  date: PropTypes.any,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default memo(CardInfoMetadata);
