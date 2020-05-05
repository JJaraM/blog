import { 
  CHANGE_PASSWORD, 
  CHANGE_USERNAME, 
  SIGN_IN, 
  SIGN_OUT,
  AUTHENTICATE 
} from './constants';

export function changePassword(password) {
  return {
    type: CHANGE_PASSWORD,
    password
  };
}

export function changeUsername(username) {
  return {
    type: CHANGE_USERNAME,
    username
  };
}

export function authenticate(isAuthenticated) {
  return {
    type: AUTHENTICATE,
    isAuthenticated
  }
}

export function signOut() {
  return {
    type: SIGN_OUT
  }
}

export function signIn() {
  return {
    type: SIGN_IN
  }
}
