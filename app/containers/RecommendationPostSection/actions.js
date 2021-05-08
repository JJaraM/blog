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
import { RETRIEVE, ITEMS_LOADED, FETCH_ERROR, ON_NEXT, ON_PREVIOUS, ON_REFRESH } from './constants';

export function retrieve() {
  return {
    type: RETRIEVE,
  };
}

export function next() {
  return {
    type: ON_NEXT,
  };
}

export function previous() {
  return {
    type: ON_PREVIOUS,
  };
}

export function refresh(item) {
  return {
    type: ON_REFRESH,
    item,
  };
}

export function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  }
}

export function error(error) {
  return {
    type: FETCH_ERROR,
    error
  }
}
