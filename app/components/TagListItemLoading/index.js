import React, { memo } from 'react';

import LoadingLine from '../LoadingLine';
import './style.scss';

function TagListItemLoading() {
  return (
    <li className="section_tags_loading">
      <LoadingLine
        randomWidthMin={150}
        randomWidthMax={250}
        height={28}
        primaryBgColor="tag-skeleton-pm-bg-color"
        secondaryBgColor="tag-skeleton-sc-bg-color"
      />
    </li>
  );
}

export default memo(TagListItemLoading);
