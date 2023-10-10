import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';
import { signInSaga } from '../saga/signInSaga'
import { signUpSaga } from '../saga/signUpSaga';
import { getUserData } from '../saga/userDataSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(signInSaga)
sagaMiddleware.run(signUpSaga)
sagaMiddleware.run(getUserData)