/*
 *  Copyright 2022-present Jonathan Jara Morales
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { selectItems, selectStatus, selectError } from './selectors';
import { next, previous, retrieve, refresh } from './actions';
import reducer from './reducer';
import saga from './saga';
import ErrorMessage from '../../components/ErrorMessage';
import PrimarySection from '../../components/PrimarySection';
import RecommendationPostList from '../../components/RecommendationPostList';
import Pagination from '../../ui/Pagination';
import { socket } from '../../configuration/socket';

/**
 * Section that contains the recommendation posts, based on the count of views.
 */
export function RecommendationPostSection({
  items,
  status,
  error,
  onLoadPage,
  onNext,
  onPrevious,
  onRefresh,
}) {
  useInjectReducer({ key: 'recommendationPostSection', reducer });
  useInjectSaga({ key: 'recommendationPostSection', saga });

  // We are going to list this event if there is any change we are going to update the displayed components
  socket('post').watchData(onRefresh);

  // When the page is loaded by first time we are going to make a request to get the recommendation posts,
  // which are the posts with more views
  useEffect(() => {
    onLoadPage();
  }, []);

  // If there are not items we are not going to render the pagination div, as is not possible to fetch data
  let PaginationComponent = () => null;
  if (items.length > 0) {
    PaginationComponent = () => <Pagination onNext={onNext} onPrevious={onPrevious} />;
  }

  return (
    <ErrorMessage error={error}>
      <PrimarySection>
        <RecommendationPostList
          items={items}
          status={status}
          pagination={<PaginationComponent />}
        />
      </PrimarySection>
    </ErrorMessage>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectItems(),
  status: selectStatus(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onNext: () => dispatch(next()),
    onPrevious: () => dispatch(previous()),
    onRefresh: item => dispatch(refresh(item)),
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
)(RecommendationPostSection);
