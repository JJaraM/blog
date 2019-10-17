import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectTagListItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import { changeTag } from '../LatestPostSection/actions';
import { makeSelectedTag } from '../LatestPostSection/selectors';

export function TagListItem({
  item,
  tagId,
  onChange
}) {
  useInjectReducer({ key: 'tagListItem', reducer });
  useInjectSaga({ key: 'tagListItem', saga });

  const isActive = item.id == tagId ? "active" : "";

  return (
    <li className={isActive}>
      <button className="tag-button" value={item.id} onClick={onChange}>{item.name}</button>
    </li>
  );
}

TagListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tagListItem: makeSelectTagListItem(),
  tagId: makeSelectedTag(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: (evt) => dispatch(changeTag(evt.target.value)),
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
)(TagListItem);
