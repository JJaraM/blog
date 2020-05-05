import { DISABLE } from './constants';

export function disable(disable) {
  return {
    type: DISABLE,
    disable
  };
}

