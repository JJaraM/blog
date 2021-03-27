import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoadingLine from '../LoadingLine';
import LoadingContainer from '../LoadingContainer';

function PostTag(props) {
  if (props.loading) {
    return (
      <LoadingContainer id={`tag-loading`}>
        <LoadingLine
          randomWidthMax={60}
          randomWidthMin={30}
          widthUnit='px'
          height={28}
          primaryBgColor="third-bg-color"
          secondaryBgColor="fourth-bg-color"
        />
      </LoadingContainer>
    );
  } else {
    return (
      <span>
        <Link to={`/category/${props.item.id}`}>{ props.item.name }</Link>
      </span>
    );
  }

}

PostTag.propTypes = {
  item: PropTypes.object,
  loading: PropTypes.bool,
};

export default memo(PostTag);
