import {userConstants} from '../constants';

export const userActions = {
  login,
  logout,
};

function login(email, password) {
  return {
    type: userConstants.LOGIN_SUCCESS,
    user,
  };
}

function logout() {}
