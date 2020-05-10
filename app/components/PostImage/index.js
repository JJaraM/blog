
import React, { memo } from 'react';
import { createGlobalStyle } from 'styled-components';
import PostImageNotFound from 'images/PostImageNotFound.png';
import { isLoadingComplete } from 'configuration/config';

function PostImage(props) {

  let img = PostImageNotFound;
  
  if (!isLoadingComplete(props.children[0] && props.children[0].props && props.children[0].props.src)) {
    img = props.children[0].props.src;
  }

  if (!img) {
    img = PostImageNotFound;
  }
  
  const CustomStyle = createGlobalStyle`
   .parent::before {
     background-image: url(${img});
   }
 `;

  return (
    <>
      <div className="grand-parent">
        <div className="post-thumbnail">
          {props.children[1]}
        </div>
      </div>
      <CustomStyle />
    </>
  );
}

PostImage.propTypes = {};

export default memo(PostImage);
