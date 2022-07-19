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

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeInfinitiveLoading } from 'containers/App/selectors';
import TagList from 'components/TagList';
import PostTagList from 'components/PostTagList';
import TagComboBox from 'containers/TagComboBox';
import { makeLoading, makeTagItems, makeIsFirstLoading, makeSearchText } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { retrieve, add, remove, create, search } from './actions';

import { getItems } from '../TagComboBox/service';
import TagContainerList from '../../components/TagContainerList';

export function TagContainer({
  items,
  item,
  usePost,
  isAuthenticated,
  loading,
  isFirstLoading,
  onLoadPage,
  onAdd,
  onRemove,
  onCreate,
  onFilter,
  searchText,
  selectedTag,
  infinitiveLoading,
}) {
  // Injection of the components
  useInjectReducer({ key: 'tagContainer', reducer });
  useInjectSaga({ key: 'tagContainer', saga });

  // Effect to detect if the page is being rendered by first time in order
  // to keep a good performance to don't sent multiple times the same request to the server
  useEffect(() => {
    if (!isFirstLoading) onLoadPage();
  }, []);

  // We are going to split the tags in 2 collections and this collection will be one that is going to be outside of the
  // dropdownList so the user can see easily the most important tags plus the current one at the end.
  const splitListOn = 8;
  const newList = getItems(items, splitListOn);
  const newListItem = newList.filter(e => e.id == selectedTag);

  // Filter the dropdownList in order to remove the items that are going to be displayed as primary
  // and filter again to remove the item if the user has selected an option that was in this collection
  let comboBoxItems = items.slice(splitListOn - 2);
  const comboBoxItem = comboBoxItems.filter(e => e.id == selectedTag);

  // If the selected item is not in the primary list we are going to render the components in a way that the selected
  // item is displayed in the div and the item in the dropdownList will be removed to don't have duplicate entries
  if (newListItem.length == 0) {
    // If the new list already have an item that comes from the drop down list we are going to remove it, as this
    // indicates that the user hits again an element in the dropdownList
    if (newList.length == 7) {
      newList.pop();
    }

    // When an user hits an element of the dropdown list by first time we are going to remove it from on dropdownList
    // and then we are going to push the element in the main div so the user can get a feed back about what tag is
    // using to get the details
    if (newList.length == 6) {
      comboBoxItems = comboBoxItems.filter(e => e.id != parseInt(selectedTag));
      newList.push(comboBoxItem.at(-1));
    }
  }

  let component = <TagList items={newList} loading={loading || infinitiveLoading} />;
  let comboBox = null;

  if (usePost) {
    component = (
      <PostTagList
        item={item}
        items={items}
        isAuthenticated={isAuthenticated}
        onAdd={onAdd}
        onCreate={onCreate}
        onRemove={onRemove}
      />
    );
  }

  if (items.length > 0 && !usePost && !loading && !infinitiveLoading) {
    comboBox = (
      <li>
        <TagComboBox
          loading={loading}
          items={comboBoxItems}
          after={splitListOn}
          onFilter={onFilter}
          searchText={searchText}
        />
      </li>
    );
  }

  return (
    <TagContainerList>
      {component}
      {comboBox}
    </TagContainerList>
  );
}

TagContainer.propTypes = {
  item: PropTypes.object,
  usePost: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  selectedTag: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  items: makeTagItems(),
  infinitiveLoading: makeInfinitiveLoading(),
  loading: makeLoading(),
  isFirstLoading: makeIsFirstLoading(),
  searchText: makeSearchText(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onAdd: id => dispatch(add(id)),
    onRemove: id => dispatch(remove(id)),
    onCreate: text => dispatch(create(text)),
    onFilter: evt => dispatch(search(evt.target.value)),
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
)(TagContainer);
