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

  let Component = () => (
    <TagList items={items} loading={loading} onFilter={onFilter} searchText={searchText} />
  );

  if (usePost) {
    Component = () => (
      <PostTagList
        item={ item }
        items={ items }
        isAuthenticated={ isAuthenticated }
        onAdd = { onAdd }
        onCreate = { onCreate }
        onRemove = { onRemove }
        />
    )
    return <Component />;
  } else {
    return <TagList items={items} loading={loading} onFilter={onFilter} searchText={searchText} />;
  }


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
