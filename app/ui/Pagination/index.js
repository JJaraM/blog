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
import './style.scss'

function Pagination(props) {
  return (
    <div className="jjara-small-pagination">
      <i onClick={props.onPrevious} className="fa fa-arrow-left" aria-hidden="true"></i>
      <i onClick={props.onNext} className="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
  );
}

Pagination.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
};

export default memo(Pagination);
