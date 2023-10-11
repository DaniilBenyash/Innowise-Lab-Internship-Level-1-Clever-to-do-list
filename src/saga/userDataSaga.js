import { put, takeEvery } from 'redux-saga/effects';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { store } from '../redux/store';

export function* fetchGetUserData() {
        const auth = getAuth();
        yield onAuthStateChanged(auth, (user) => {
            put(store.dispatch({type: 'userData/getUser', payload: user}))
        }) 
}

export function* getUserSaga() {
    
    yield takeEvery('signIn/signInSuccess', fetchGetUserData)
    yield takeEvery('signUp/signUpSuccess', fetchGetUserData)
}