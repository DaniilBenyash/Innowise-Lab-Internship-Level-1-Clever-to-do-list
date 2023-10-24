import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { authService } from '../dataBaseServices/authService';

export function* fetchSignIn(action) {
  try {
    const email = action.payload.email;
    const password = action.payload.password;

    const data = yield authService.signIn(email, password);

    yield put(store.dispatch({ type: 'userData/getUser', payload: data.user }));
  } catch (error) {
    yield put(store.dispatch({ type: 'userData/signInFailure', payload: error.code }));
  }
}

export function* signInSaga() {
  yield takeEvery('userData/signIn', fetchSignIn);
}
