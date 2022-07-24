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

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { retrieveByTag } from '../LatestPostSection/actions';
import { makeSelectedTag } from '../LatestPostSection/selectors';
import ButtonTag from '../../ui/Button/ButtonTag';

export function TagListItem({ item, tagId, onChange }) {

  let activeLbl = '';
  let onClick = onChange;

  if (item.id == tagId) {
    activeLbl = 'active';
    localStorage.setItem("Latest-Post-Tag-Selected", tagId);
    onClick = () => {};
  }

  return (
    <li className={activeLbl}>
      <ButtonTag value={item.id} onClick={onClick}>
        {item.name}
      </ButtonTag>
    </li>
  );
}

TagListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tagId: makeSelectedTag(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChange: evt => dispatch(retrieveByTag(evt.target.value)),
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
)(TagListItem);
