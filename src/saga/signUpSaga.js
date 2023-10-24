import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { authService } from '../dataBaseServices/authService';

export function* fetchSignUp(action) {
  try {
    const email = action.payload.email;
    const password = action.payload.password;

    const data = yield authService.signUp(email, password);

    yield put(store.dispatch({ type: 'userData/getUser', payload: data.user }));
  } catch (error) {
    yield put(store.dispatch({ type: 'userData/signUpFailure', payload: error.code }));
  }
}

export function* signUpSaga() {
  yield takeEvery('userData/signUp', fetchSignUp);
}
