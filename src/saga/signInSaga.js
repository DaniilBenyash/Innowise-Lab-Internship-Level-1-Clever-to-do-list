import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { FirebaseAuthService } from '../firebaseServices/FirebaseAuthService';

export function* fetchSignIn(action) {
  try {
    const email = action.payload.email;
    const password = action.payload.password;
    const firebase = new FirebaseAuthService(email, password);
    const user = yield firebase.signIn();
    put(store.dispatch({ type: 'userData/getUser', payload: user }));
  } catch (error) {
    console.log(error);
    yield put(store.dispatch({ type: 'userData/signInFailure', payload: error.code }));
  }
}

export function* signInSaga() {
  yield takeEvery('userData/signIn', fetchSignIn);
}
