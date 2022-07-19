/*
 *  Copyright 2022-present Jonathan Jara Morales
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, { memo } from 'react';
import LatestPostItem from 'containers/LatestPostItem';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import LatestPostItemLoading from '../LatestPostItemLoading';
import './style.scss';

// The following implementation is going to show the list of post available
function LatestPostItemList(props) {
  let { loading } = props;
  let content = [];

  //If the data is still pending to arrive or the data is complete we are going to add the elements into the collection
  //to be render in the html
  if (props.items && props.items.length > 0) {
    content.push(
      props.items.map(item => <LatestPostItem key={`latest-post-item-${item.id}`} item={item} />),
    );
  }

  //If the data is still pending to be returned
  if (loading) {
    content.push([1, 2, 3].map(idx => <LatestPostItemLoading key={`latest-post-item-${idx}`} />));
  }

  return (
    <div className="mansory">
      <div className="d-flex justify-content-center">
        <Masonry
          options={{
            gutter: 20,
            transitionDuration: '0.8s',
          }}
          className="container"
        >
          {content}
        </Masonry>
      </div>
    </div>
  );
}

LatestPostItemList.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
};

export default memo(LatestPostItemList);
