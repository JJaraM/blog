import { DISABLE, DELETE } from './constants';

export function disable(disable) {
  return {
    type: DISABLE,
    disable
  };
}

export function deletePost(id) {
  return {
    type: DELETE,
    id
  };
}