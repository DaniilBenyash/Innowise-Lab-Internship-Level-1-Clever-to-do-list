import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { FirebaseAuthService } from '../DBServices/FirebaseAuthService';

export function* fetchSignUp(action) {
    try {
        const email = action.payload.email
        const password = action.payload.password
        const firebase = new FirebaseAuthService(email, password)
        const user = yield firebase.signUp()

        put(store.dispatch({type: 'userData/getUser', payload: user}))

    } catch(error) {
        yield put(store.dispatch({type: 'signUp/signUpFailure', payload: error.code}))
    } 
}

export function* signUpSaga() {
    yield takeEvery('signUp/signUp', fetchSignUp)
}