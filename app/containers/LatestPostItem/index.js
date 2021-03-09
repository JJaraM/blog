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
import { makeTagItems } from '../TagContainer/selectors';
import Img from 'components/Img';
import Metadata from 'components/Metadata';

export function LatestPostItem({
  item,
  tags
}) {
  useInjectReducer({ key: 'latestPostItem', reducer });
  useInjectSaga({ key: 'latestPostItem', saga });

  const refresh = item.refresh;
  let refreshClassName = '';
  let Refresh = () => (<></>);

  if (refresh) {
      refreshClassName = 'refresh';
      Refresh = () => (
        <div className="refresh-icon">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </div>
      );
  }

  const Component = () => (
    <div className={`card-body ${refreshClassName}`}>
      <div className="post-text">
        <h3 className="main-title-color">
            {item.title}
        </h3>
        <Metadata>
          <span>
            <DateField value={item.updateDate} />
          </span>
        </Metadata>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <PostTagList item={item} items={tags}/>
      </div>
      <Refresh />
    </div>
  );

  return (
    <div className="card">
      <div>
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
});

function mapDispatchToProps(dispatch) {
  return {
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
