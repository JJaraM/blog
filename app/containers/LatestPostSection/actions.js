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

import { RETRIEVE_LAST_POST, RETRIEVE_DONE, RETRIEVE_BY_TAG, ERROR, REFRESH } from './constants';

// Retrieve the latest post
export function retrieve() {
  return {
    type: RETRIEVE_LAST_POST,
  };
}

// Indicates when the data was fetch correctly
export function done(items) {
  return {
    type: RETRIEVE_DONE,
    items,
  };
}

export function retrieveByTag(tagId) {
  return {
    type: RETRIEVE_BY_TAG,
    tagId,
  };
}

export function error(message) {
  return {
    type: ERROR,
    message,
  };
}

export function refresh(item) {
  return {
    type: REFRESH,
    item,
  };
}
