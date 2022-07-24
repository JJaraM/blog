import { FAVOURITE } from './constants';

export function demo(id) {
  return {
    type: FAVOURITE,
    id: id,
  };
}
