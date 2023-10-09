import { put, takeEvery } from 'redux-saga/effects';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { store } from '../redux/store';

export function* fetchRegister(action) {
    try {
        const auth = yield getAuth();
        yield createUserWithEmailAndPassword(auth, 'grandergagaga1@gmail.com', 12345678)
        .then((userCredential) => {
            console.log(1, userCredential);
            const user = userCredential.user;
            console.log(2, user);
        })

    } catch(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    } 
}

export function* registerSaga() {
    yield takeEvery('register/register', fetchRegister)
}