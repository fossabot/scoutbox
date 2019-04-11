import {takeLatest} from 'redux-saga/effects';
import {loginSaga} from './authenticationSaga';
import {userConstants} from '../constants';

export default function* watchUserAuthentication() {
  yield takeLatest(userConstants.LOGIN_REQUEST, loginSaga);
}
