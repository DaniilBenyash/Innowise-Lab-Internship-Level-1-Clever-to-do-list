import { put, takeEvery } from 'redux-saga/effects';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { store } from '../redux/store';

export function* fetchSignUp(action) {
    try {
        const email = action.payload.email
        const password = action.payload.password
        const auth = getAuth();
        yield createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            put(store.dispatch({type: 'signUp/signUpSuccess', payload: user}))
        })

    } catch(error) {
        console.log(error.message, error.code);
        yield put(store.dispatch({type: 'signUp/signUpFailure', payload: error.code}))
    } 
}

export function* signUpSaga() {
    yield takeEvery('signUp/signUp', fetchSignUp)
}