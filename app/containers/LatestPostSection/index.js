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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { FormattedMessage } from 'react-intl';
import { socket } from 'configuration/socket';
import TagContainer from 'containers/TagContainer';
import LatestPostItemList from 'components/LatestPostItemList';
import PrincipalTitle from 'components/PrincipalTitle';
import ContainerCenter from 'components/ContainerCenter';
import Container from 'components/Container';
import SecondarySection from 'components/SecondarySection';
import LoadingButton from 'components/LoadingButton';
import messages from './messages';
import { retrieve, refresh } from './actions';
import reducer from './reducer';
import { makeItems, makeLoading, makeIsFirstLoading, makeSelectedTag } from './selectors';
import saga from './saga';

// The following component is going to render the last 'n' post available
// based on the last edition received
export function LatestPostSection({ items, loading, isFirstLoading, onRetrieve, onRefresh, selectedTag }) {
  // Injection of the components
  useInjectReducer({ key: 'latestPostSection', reducer });
  useInjectSaga({ key: 'latestPostSection', saga });

  // Effect to detect if the page is being rendered by first time in order
  // to keep a good performance to don't sent multiple times the same request to the server
  useEffect(() => {
    if (!isFirstLoading) onRetrieve();
  }, []);

  // We are going to connect to a web socket to keep listen the events for the
  // post so in that way we can have a realtime feature and makes possible
  // that any user can see if there is a change in the posts
  socket('post').watchData(onRefresh);

  // Construct the entire component that is going to be rendered in the browser
  return (
    <Container>
      <SecondarySection>
        {/* Title that is going to be display on the top of the component*/}
        <PrincipalTitle
          title={<FormattedMessage {...messages.header} />}
          bottomDescription={<FormattedMessage {...messages.description} />}
        />

        {/* Render all the available tags centered*/}
        <ContainerCenter>
          <TagContainer selectedTag={selectedTag} />
        </ContainerCenter>

        {/* Render all the latest available post*/}
        <LatestPostItemList loading={loading} items={items} />

        {/* Button that is going to display more data in the view*/}
        <LoadingButton loading={loading} onClick={onRetrieve}>
          <FormattedMessage {...messages.viewMore} />
        </LoadingButton>
      </SecondarySection>
    </Container>
  );
}

// Parameters available when the component is going to be called for any other
LatestPostSection.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

// Operations that is going to be executed by the component
const mapStateToProps = createStructuredSelector({
  // Fetch the latest post items previously loaded
  items: makeItems(),
  // Verifies if the application is loading
  loading: makeLoading(),
  // Verifies if the application is loading by first time
  isFirstLoading: makeIsFirstLoading(),
  // Gets the tag that is selected currently
  selectedTag: makeSelectedTag(),
});

// Operations that indicates that is going to make a call to an http service
function mapDispatchToProps(dispatch) {
  return {
    // Makes an HTTP Request to retrieve the latest posts
    onRetrieve: () => dispatch(retrieve()),
    // When there is a web socket event the post is going to be updated
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
)(LatestPostSection);
