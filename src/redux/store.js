import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer';
import { signInSaga } from '../saga/signInSaga'
import { signUpSaga } from '../saga/signUpSaga';
import { getUserSaga } from '../saga/userDataSaga'
import { getTasksSaga } from '../saga/getTasks';
import { postTaskSaga } from '../saga/postTask';
import { changeStatusTaskSaga } from '../saga/changeStatusTask';
import { updateTaskSaga } from '../saga/updateTask';

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(signInSaga)
sagaMiddleware.run(signUpSaga)
sagaMiddleware.run(getUserSaga)
sagaMiddleware.run(getTasksSaga)
sagaMiddleware.run(postTaskSaga)
sagaMiddleware.run(changeStatusTaskSaga)
sagaMiddleware.run(updateTaskSaga)