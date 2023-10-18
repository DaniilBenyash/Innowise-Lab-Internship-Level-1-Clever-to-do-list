import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseTodoService } from '../firebaseServices/FirebaseTodoService';
import { store } from '../redux/store';

export function* fetchGetTasks(action) {
    try {
        const id = action.payload
        const firebase = new FirebaseTodoService(id)
        const tasks = yield firebase.getTasks()

        yield put(store.dispatch({type: 'tasks/setTasks', payload: tasks}))

    } catch(error) {
        yield console.log(error)
    } 
}

export function* getTasksSaga() {
    yield takeEvery('tasks/getTasks', fetchGetTasks)
}