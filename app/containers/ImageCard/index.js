import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import './style.scss';

import CardContainer from '../../ui/CardItem';
import CardImage from '../../ui/CardItem/CardImage';
import CardImageTag from '../../ui/CardItem/CardImageTag';
import CardDivider from '../../ui/CardItem/CardDivider';
import CardInfoContainer from '../../ui/CardItem/CardInfoContainer';
import CardInfoTitle from '../../ui/CardItem/CardInfoTitle';
import CardInfoMetadata from '../../ui/CardItem/CardInfoMetadata';
import CardInfoDescription from '../../ui/CardItem/CardInfoDescription';

export function ImageCard(props) {

  let { href, image, tag, title, date, description } = props;

  return (
    <CardContainer>
      <CardDivider>
        <CardImage href={href} image={image}>
          <CardImageTag tag={tag} />
        </CardImage>
      </CardDivider>
      <CardDivider>
        <CardInfoContainer>
          <CardInfoTitle title={title} href={href} />
          <CardInfoMetadata date={date} />
          <CardInfoDescription description={description} />
        </CardInfoContainer>
      </CardDivider>
    </CardContainer>
  );
}

ImageCard.propTypes = {
  item: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(ImageCard);
