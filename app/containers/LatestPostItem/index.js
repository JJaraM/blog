import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DateField from 'components/DateField';
import { Link } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import './style.scss';
import PostTagList from 'components/PostTagList';
import { makeTagItems, makeLoading } from '../TagContainer/selectors';
import Img from 'components/Img';
import Metadata from 'components/Metadata';
import RefreshIcon from '../../ui/RefreshIcon';
import { selectFavourite } from '../LatestPostSection/actions';

export function LatestPostItem({ item, tags, loading, onFavourite }) {
  useInjectReducer({ key: 'latestPostItem', reducer });

  const { refresh } = item;
  let refreshClassName = '';
  let Refresh = () => <></>;

  if (refresh) {
    refreshClassName = 'refresh';
    Refresh = () => <RefreshIcon refresh={refresh} />
  }

  const favourites = JSON.parse(localStorage.getItem('favourites'));
  let selected = '';
  if (favourites) {
    const index = favourites.findIndex(object => object.id === item.id);
    if (index > -1) {
      selected = 'favourite-selected';
    }
  }

  const Component = () => (
    <div className={`card-body ${refreshClassName}`}>
      <div className="post-text">
        <Link to={`/post/${item.id}`}>
          <h3 className="main-title-color">{item.title}</h3>
        </Link>
        <Metadata>
          <span>
            <DateField value={item.updateDate} />
          </span>
        </Metadata>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <PostTagList item={item} items={tags} loading={loading} />
      </div>
      <Refresh />
    </div>
  );

  return (
    <div className="card">
      <div>
        <i
          id={`favourite-${item.id}`}
          className={`fa fa-star favourite-blog ${selected}`}
          aria-hidden="true"
          value={item.id}
          onClick={() => onFavourite(item.id)}
        />
        <Link to={`/post/${item.id}`}>
          <Img src={item.image} className="card-img-top" alt="..." />
        </Link>
        <Component />
      </div>
    </div>
  );
}

LatestPostItem.propTypes = {
  item: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  tags: makeTagItems(),
  loading: makeLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFavourite: id => dispatch(selectFavourite(id)),
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
)(LatestPostItem);
