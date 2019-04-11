import {put, takeEvery} from 'redux-saga/effects';
import firebase from 'react-native-firebase';

function* authUser(action) {
  try {
    const data = yield firebase.auth().signInAnonymously();
    yield put();
  } catch (e) {
    yield put();
  }
}

function* dataSaga() {
  yield takeEvery('FETCHING_DATA', authUser);
}

export default dataSaga;
