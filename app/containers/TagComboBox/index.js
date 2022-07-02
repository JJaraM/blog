import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { retrieveByTag } from '../LatestPostSection/actions';
import { makeSelectedTag } from '../LatestPostSection/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import makeSelectTagListItem from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

import reducer from './reducer';
import './style.scss';
import ComboBox from '../../components/ComboBox';

export function TagListItemMore({
  items,
  loading,
  onFilter,
  onChange,
  searchText,
}) {

  useInjectReducer({ key: 'tagListItem', reducer });

  if (loading) {
    return <></>;
  }

  return (
    <ComboBox items={items} label="More" value={searchText} onChange={onFilter} onClick={onChange} />
  )

}

TagListItemMore.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onFilter: PropTypes.func,
  items: PropTypes.any,
  searchText: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tagListItem: makeSelectTagListItem(),
  tagId: makeSelectedTag(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: (evt) => dispatch(retrieveByTag(evt.target.value)),
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
)(TagListItemMore);

