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
import Metadata from 'components/Metadata';

export function RecomendationPostItem(props) {

  const key = 'RecomendationPostItem';

  useInjectReducer({ key: key, reducer });
  useInjectSaga({ key: key, saga });

  const { item } = props;

  let image = item.image;
  if (item.image == null) {
    image = '/PostImageNotFound.png';
  }

  return (
    <div className="row pb-30">
      <div className="col-lg-6">
        <Link to={`/post/${item.id}`}>
          <div className="img-elementor" style={{backgroundImage: `url(${image})`}}>
            <div className="tags views">
              <span>
                  { item.views }
              </span>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-lg-6">
        <div className="post-text">
          <h2 className="main-title-color">
            <Link to={`/post/${item.id}`}>
              {item.title}
            </Link>
          </h2>
          <Metadata>
            <span>
              <DateField value={item.updateDate} />
            </span>
          </Metadata>
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
