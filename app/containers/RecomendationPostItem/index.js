import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

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
    <div class="row mb-30">
      <div class="col-lg-6">
        <div class="img-elementor" style={{backgroundImage: `url(${item.image})`}}>
          <div className="tags views">
            <span><a href="#">{item.views}</a></span>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
        <div class="post-text">
          <h2 class="main-title-color">
            <a href="#">
              {item.title}
            </a>
          </h2>
          <div class="meta-data">
            <span>
              <DateField value={item.updateDate} />
            </span>
          </div>
          <div class="description">
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
