/**
 * Copyright (c) 2021 Jonathan Jara
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import { selectItems, selectStatus, selectError } from './selectors';
import { next, previous, retrieve } from './actions';
import reducer from './reducer';
import saga from './saga';

import ErrorMessage from '../../components/ErrorMessage';
import PrimarySection from '../../components/PrimarySection';
import RecommendationPostList from '../../components/RecommendationPostList';
import Pagination from '../../ui/Pagination';

/**
 * Section that contains the recommendation posts, based on the count of views.
 */
export function RecommendationPostSection({
  items,
  status,
  error,
  onLoadPage,
  onNext,
  onPrevious
}) {

  useInjectReducer({ key: 'recommendationPostSection', reducer });
  useInjectSaga({ key: 'recommendationPostSection', saga });

  useEffect(() => {
    onLoadPage();
  }, []);

  return (
    <ErrorMessage error={ error }>
      <PrimarySection>
        <RecommendationPostList
          items={ items }
          status={ status }
          pagination={
            <Pagination onNext={onNext} onPrevious={onPrevious} />
          }
        />
      </PrimarySection>
    </ErrorMessage>
  );
}

const mapStateToProps = createStructuredSelector({
  items: selectItems(),
  status: selectStatus(),
  error: selectError()
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadPage: () => dispatch(retrieve()),
    onNext:() => dispatch(next()),
    onPrevious:() => dispatch(previous()),
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
