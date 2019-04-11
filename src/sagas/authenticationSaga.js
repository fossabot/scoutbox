import {userConstants} from '../constants';
import {loginUserService} from '../service/authenticationService';

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [put({ type: userConstants.LOGIN_SUCCESS, response })];
  } catch (error) {
    yield put({ type: userConstants.LOGIN_FAILURE, error });
  }
}
