import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { makeItems } from './selectors';
import reducer from './reducer';
import saga from './saga';
import RecomendationsPostList from 'components/RecomendationsPostList';
import { retrieve } from './actions';

export function RecomendationsPostSection({
  items,
  onLoadPage,
}) {
  useInjectReducer({ key: 'recomendationsPostSection', reducer });
  useInjectSaga({ key: 'recomendationsPostSection', saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <div className="main-bg-color mt-30">
      <RecomendationsPostList items={items} />
    </div>
  );
}

RecomendationsPostSection.propTypes = {
  onLoadPage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  items: makeItems(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
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
)(RecomendationsPostSection);
