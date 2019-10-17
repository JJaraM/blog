import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TestimonialItem from 'containers/TestimonialItem';
import TestimonialItemLoading from '../TestimonialItemLoading';
import { isLoading } from 'configuration/config';

function TestimonialList(props) {

  let content = [1, 2, 3].map(item => (
    <TestimonialItemLoading key={`testimonial-${item}`}/>
  ));

  if (isLoading(props.loading)) {
    content = props.items.map(item => (
      <TestimonialItem key={`testimonial-${item.id}`} item={item} />
    ));
  }

  return (    
    <div className="container d-flex justify-content-center testimonial-section">
      { content }
    </div>
  );
}
TestimonialList.propTypes = {
  loading: PropTypes.bool,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default memo(TestimonialList);
