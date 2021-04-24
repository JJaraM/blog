import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { changeTag } from '../LatestPostSection/actions';
import { makeSelectedTag } from '../LatestPostSection/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import makeSelectTagListItem from './selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';

import reducer from './reducer';
import './style.scss';

export function TagListItemMore({
  items,
  after,
  onFilter,
  onChange,
  searchText,
}) {

useInjectReducer({ key: 'tagListItem', reducer });
  let more;

  if (items.length === 0) {
    return (
      <div className="dropdown">
        <button className="tag-button dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More
        </button>
        <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">
          <input type="text" value={searchText} className="search-filter-dropdown-list" onChange={onFilter}></input>
        </div>
      </div>
    )
  } else {
    more = items.map(item => {
      return <button key={`tag-item-${item.id}`} className="tag-button dropdown-item" value={item.id} onClick={onChange}>{item.name}</button>
    });
  }



  return (
    <div className="dropdown">
      <button className="tag-button dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        More
      </button>
      <div className="dropdown-menu pre-scrollable" aria-labelledby="dropdownMenuButton">
        <input type="text" value={searchText} className="search-filter-dropdown-list" onChange={onFilter}></input>
        <div className="pre-scrollable-tags">
          { more }
        </div>
      </div>
    </div>
  );
}

TagListItemMore.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  onFilter: PropTypes.func,
  items: PropTypes.any,
  after: PropTypes.number,
  searchText: PropTypes.string,
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
