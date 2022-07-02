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
import PropTypes from 'prop-types';
import TagListItem from 'containers/TagListItem';
import { isLoadingComplete } from 'configuration/config';
import TagListItemLoading from '../TagListItemLoading';

// Component that is going to build the list that is going to contains the list of different tags
function TagList(props) {
  const { items, loading } = props;
  let list;

  // Id Resolver Arrow Function
  const id = idx => 'jjara-tag-list-item' + idx;

  //If the application has not receive yet any tag we are going to show a loading component to give feed back that
  //we are still waiting for the results
  if (isLoadingComplete(loading)) {
    list = items.map((item, index) => <TagListItem key={id(index)} item={item} />);
  } else {
    list = [...Array(8)].map((item, index) => (
      <TagListItemLoading key={id(index)} />
    ));
  }
  return <>{list}</>;
}

TagList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  loading: PropTypes.bool.isRequired,
};

export default memo(TagList);
