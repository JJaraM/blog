
import React, { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import PostImageNotFound from 'images/PostImageNotFound.png';
import { isLoadingComplete } from 'configuration/config';

function PostImage(props) {

  let img = PostImageNotFound;

  if (!isLoadingComplete(props.children[0] && props.children[0].props && props.children[0].props.obj)) {
    img = props.children[0].props.obj.image;
  }
  
  const CustomStyle = createGlobalStyle`
   .parent::before {
     background-image: url(${img});
   }
 `;

  return (
    <>
      <div className="grand-parent">
        {props.children[1]}
      </div>
      <CustomStyle />
    </>
  );
}

PostImage.propTypes = {};

export default memo(PostImage);
