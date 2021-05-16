import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import List from '../../ui/List/list';
import ImageCircle from '../../ui/Image/imageCircle';
import ImageCardInfoContainer from '../../ui/CardItem/CardInfoContainer';
import ImageCardInfoTitle from '../../ui/CardItem/CardInfoTitle';
import ImageCardInfoMetadata from '../../ui/CardItem/CardInfoMetadata';
import ImageCardInfoDescription from '../../ui/CardItem/CardInfoDescription';
import Card from '../../ui/CardItem/Card';
import { isLoadingComplete } from '../../configuration/config';

function TestimonialList(props) {

  return (
    <List items={props.items} loading={!isLoadingComplete(props.loading)} size={3} onEach={(item, key, loading) => (
      <Card key={`testimonial-item-${key}`}>
        <div className="testimonials">
          <div className="d-flex justify-content-center pr-30 pl-30 ">
            <div className="testimonial-item testimonial-section-header d-flex justify-content-center  pt-30 pb-30 ">
              <ImageCircle src={item.img} loading={loading} />
            </div>
          </div>
          <div className="pb-30 pr-30 pl-30">
            <ImageCardInfoContainer>
              <ImageCardInfoTitle title={item.name} href={"#"} loading={loading} small={true} lines={4} />
              <ImageCardInfoMetadata title={item.title} date={item.date} loading={loading} />
              <ImageCardInfoDescription description={item.text} loading={loading} />
            </ImageCardInfoContainer>
          </div>
        </div>
      </Card>
    )}/>
  );
}

TestimonialList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(TestimonialList);

