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
import produce from 'immer';
import { ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS, ON_REFRESH } from './constants';
import { ERROR, LOADING, SUCCESS } from '../../common/status';


export const initialState = {
  items: [],
  status: LOADING,
  error: null,
  page: 0,
  item: null,
};

/* eslint-disable default-case, no-param-reassign */
const recommendationPostSectionReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {

      case ON_NEXT:
        draft.page = draft.page + 1;
        break;

      case ON_PREVIOUS:
        if (draft.page > 0) {
          draft.page = draft.page - 1;
        }
        break;

      case ITEMS_LOADED:
        draft.items = action.items;
        draft.status = SUCCESS;
        break;

      case FETCH_ERROR:
        draft.items = [];
        draft.status = ERROR;
        draft.error = action.error;
        break;


      case ON_REFRESH:
        //Check if the event already exist in the array
        const index = state.items.findIndex(x => x.id === action.item.id);

        // Update the existed one
        if (index > -1) {
          action.item.refresh = true;

          return {
            ...state,
            items: [
              ...state.items.slice(0, index),
              action.item,
              ...state.items.slice(index + 1),
            ]
          }
        }
        break;
      }

  });

export default recommendationPostSectionReducer;
