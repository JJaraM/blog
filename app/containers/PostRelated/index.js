import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import RecomendationPostItem from 'containers/RecomendationPostItem';
import PostPanelLeftSide from 'components/PostPanelLeftSide';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { retrieve, next, previous } from './actions';
import { makeLoading, makeItemsTags } from './selectors';

export function PostRelated({
  tags,
  items,
  onLoadPage,
  onNext,
  onPrevious
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
          <div className="sublist" >
            <div className="row pb-30" key={`post-related-${item.id}`}>
              <div className="col-lg-12">
                <RecomendationPostItem item={item} />
              </div>
            </div>
          </div>
      )
    });
    return (
      <PostPanelLeftSide>
        <div className="recomendations-container">
          <i onClick={ onPrevious } className="fa fa-arrow-left" aria-hidden="true"></i>
          <i onClick={ onNext } className="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
        <div>{subList}</div>
      </PostPanelLeftSide>
    );
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
    onNext: () => dispatch(next()),
    onPrevious: () => dispatch(previous()),
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
