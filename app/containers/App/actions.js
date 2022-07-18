import { SEARCH, CLOSE, SIGN_IN, CREATE_POST, SPY, LOADING } from './constants';

export function search() {
  return {
    type: SEARCH,
  };
}

export function close() {
  return {
    type: CLOSE,
  };
}

export function signIn() {
  return {
    type: SIGN_IN,
  };
}

export function createPost() {
  return {
    type: CREATE_POST,
  };
}

export function spy() {
  return {
    type: SPY,
  };
}

export function loading(loading) {
  return {
    type: LOADING,
    loading,
  };
}
