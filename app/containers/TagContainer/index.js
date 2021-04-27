import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  retrieve,
  add,
  remove,
  create,
  search,
} from './actions';
import { makeTagItems, makeLoading, makeIsFirstLoading, makeSearchText } from './selectors'
import TagList from 'components/TagList';
import PostTagList from 'components/PostTagList';
import { getFilterList, getItems } from '../TagComboBox/service';
import TagContainerList from '../../components/TagContainerList';
import TagComboBox from 'containers/TagComboBox';

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
}) {
  useInjectReducer({ key: 'tagContainer', reducer });
  useInjectSaga({ key: 'tagContainer', saga });

  useEffect(() => {
    if (!isFirstLoading) {
     onLoadPage();
    }
  }, []);

  const splitListOn = 8;
  const newList = getItems(items, splitListOn);
  const comboBoxItems = items.slice(splitListOn - 2);

  let component = <TagList items={newList} loading={loading} />;
  let comboBox = null;

  if (usePost) {
    component = <PostTagList
      item={ item }
      items={ items }
      isAuthenticated={ isAuthenticated }
      onAdd = { onAdd }
      onCreate = { onCreate }
      onRemove = { onRemove }
    />;
  }

  if (items.length > 0) {
    comboBox = (
      <li>
        <TagComboBox loading={loading} items={comboBoxItems} after={splitListOn} onFilter={onFilter} searchText={searchText}  />
      </li>
    )
  }

  return (
    <TagContainerList>
      { component }
      { comboBox }
    </TagContainerList>
  )

}

TagContainer.propTypes = {
  item: PropTypes.object,
  usePost: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  items: makeTagItems(),
  loading: makeLoading(),
  isFirstLoading: makeIsFirstLoading(),
  searchText: makeSearchText(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onAdd: (id) => dispatch(add(id)),
    onRemove: (id) => dispatch(remove(id)),
    onCreate: (text) => dispatch(create(text)),
    onFilter: (evt) => dispatch(search(evt.target.value)),
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
