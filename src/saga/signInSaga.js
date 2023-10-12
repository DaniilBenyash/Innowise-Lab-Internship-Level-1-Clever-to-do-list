import { put, takeEvery } from 'redux-saga/effects';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { store } from '../redux/store';

export function* fetchSignIn(action) {
    try {
        const email = action.payload.email
        const password = action.payload.password
        const auth = getAuth();
        yield signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            put(store.dispatch({type: 'signIn/signInSuccess', payload: user}))
        })
        
    } catch(error) {
        yield put(store.dispatch({type: 'signIn/signInFailure', payload: error.code}))
    } 
}

export function* signInSaga() {
    yield takeEvery('signIn/signIn', fetchSignIn)
}