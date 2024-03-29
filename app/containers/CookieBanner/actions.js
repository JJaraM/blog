import { ACCEPT, DENIED, VERIFY, ACKNOWLEDGE } from './constants';

export function accept() {
  return {
    type: ACCEPT,
  };
}

export function denied() {
  return {
    type: DENIED
  };
}

export function verify() {
  return {
    type: VERIFY
  };
}

export function acknowledge() {
  return {
    type: ACKNOWLEDGE
  };
}
