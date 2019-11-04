import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectLatestPostItem from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';
import DateField from 'components/DateField';

export function RecomendationPostItem(props) {

  const key = 'RecomendationPostItem';

  useInjectReducer({ key: key, reducer });
  useInjectSaga({ key: key, saga });

  const { item } = props;

  return (
    <div className="row pb-30">
      <div className="col-lg-6">
        <div className="img-elementor" style={{backgroundImage: `url(${item.image})`}}>
          <div className="tags views">
            <span>
              <a href="#">{item.views}</a></span>
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="post-text">
          <h2 className="main-title-color">
            <Link to={`/post/${item.id}`}>
              {item.title}
            </Link>
          </h2>
          <div className="meta-data">
            <span>
              <DateField value={item.updateDate} />
            </span>
          </div>
          <div className="description">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

RecomendationPostItem.propTypes = {
  item: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  latestPostItem: makeSelectLatestPostItem(),
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
)(RecomendationPostItem);
