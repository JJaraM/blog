import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { changeTag } from '../LatestPostSection/actions';
import { makeSelectedTag } from '../LatestPostSection/selectors';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import makeSelectTagListItem from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

import reducer from './reducer';

export function TagListItemMore({
  items,
  after,
  onChange
}) {

useInjectReducer({ key: 'tagListItem', reducer });
  let pos = 0;
  const more = items.map(item => {
    pos++;
    if (pos > after) {
      return <button key={`tag-item-${item.id}`} className="tag-button dropdown-item" value={item.id} onClick={onChange}>{item.name}</button>
    }
    return;      
  });

  return (
    <div className="dropdown">
      <button className="tag-button dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
      </button>
      <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">
        { more }
      </div>
    </div>
  );
}

TagListItemMore.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  items: PropTypes.any,
  after: PropTypes.number,
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
)(TagListItemMore);