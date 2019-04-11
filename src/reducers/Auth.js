import {userConstants} from '../constants';

const initialState = { auth: false };

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case userConstants.LOGIN_REQUEST:
      return {};
    case userConstants.LOGIN_SUCCESS:
      return {};
    case userConstants.LOGIN_FAILURE:
      return {};
    default:
      return { ...state };
  }
};

export default authReducer;
