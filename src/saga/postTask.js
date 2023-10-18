import { put, takeEvery } from 'redux-saga/effects';
import { FirebaseTodoService } from '../firebaseServices/FirebaseTodoService';
import { store } from '../redux/store';

export function* postTask(action) {
  try {
    const userId = action.payload.userId;
    const task = action.payload.task;
    const firebase = new FirebaseTodoService(userId);
    const tasks = yield firebase.postTask(task);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: tasks }));
  } catch (error) {
    console.log(error);
  }
}

export function* postTaskSaga() {
  yield takeEvery('tasks/postTask', postTask);
}
