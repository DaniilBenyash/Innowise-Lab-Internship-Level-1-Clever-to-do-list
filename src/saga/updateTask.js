import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { FirebaseTodoService } from '../firebaseServices/FirebaseTodoService';

export function* updateTask(action) {
  try {
    const userId = action.payload.userId;
    const task = action.payload.task;
    const firebase = new FirebaseTodoService(userId);
    const tasks = yield firebase.updateTask(task);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: tasks }));
  } catch (error) {
    console.log(error);
  }
}

export function* updateTaskSaga() {
  yield takeEvery('tasks/updateTask', updateTask);
}
