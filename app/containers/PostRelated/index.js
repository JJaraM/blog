import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import RecomendationPostItem from 'containers/RecomendationPostItem';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { retrieve } from './actions';
import { makeLoading, makeItemsTags } from './selectors';

export function PostRelated({
  tags,
  items,
  onLoadPage,
}) {
  useInjectReducer({ key: 'postRelated', reducer });
  useInjectSaga({ key: 'postRelated', saga });

  useEffect(() => {    
    onLoadPage(tags);
  }, []);

  if (items.length > 0 ) {
    let subList = items.map(item => {
      item.description = '';
      return (
        <div className="sublist" key={`post-related-${item.id}`}>
          <div className="row pb-30">
            <div className="col-lg-12">
              <RecomendationPostItem item={item} />
            </div>
          </div>
        </div>
      )
    });
    return <>{subList}</>
  }

  return <div />;
}

PostRelated.propTypes = {
  dispatch: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  onLoadPage: PropTypes.func,
  items: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  items: makeItemsTags(),
  loaded: makeLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: (tags) =>  dispatch(retrieve(tags)),
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
)(PostRelated);
