import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import DateField from 'components/DateField';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLatestPostItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';
import PostTagList from 'components/PostTagList';
import { makeTagItems, makeLoading } from '../TagContainer/selectors';
import Img from 'components/Img';
import Metadata from 'components/Metadata';

export function LatestPostItem({ item, tags, loading, onFavourite }) {
  useInjectReducer({ key: 'latestPostItem', reducer });
  useInjectSaga({ key: 'latestPostItem', saga });

  const { refresh } = item;
  let refreshClassName = '';
  const Refresh = () => <></>;

  if (refresh) {
    refreshClassName = 'refresh';
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
  latestPostItem: makeSelectLatestPostItem(),
  tags: makeTagItems(),
  loading: makeLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFavourite: id => {
      let favourites = JSON.parse(localStorage.getItem('favourites'));
      const el = document.getElementById(`favourite-${id}`);

      if (favourites == undefined) {
        favourites = [];
      }
      const index = favourites.findIndex(object => object.id === id);
      if (index === -1) {
        favourites.push({ id });
        localStorage.setItem('favourites', JSON.stringify(favourites));
        el.classList.add('favourite-selected');
      } else {
        favourites.splice(index, 1);
        localStorage.setItem('favourites', JSON.stringify(favourites));
        el.classList.remove('favourite-selected');
      }
    },
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
