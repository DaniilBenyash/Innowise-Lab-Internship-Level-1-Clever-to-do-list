import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { FirebaseTodoService } from '../firebaseServices/FirebaseTodoService';

export function* changeStatusTask(action) {
  try {
    const userId = action.payload.userId;
    const taskId = action.payload.taskId;
    const firebase = new FirebaseTodoService(userId);
    const tasks = yield firebase.changeStatusTask(taskId);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: tasks }));
  } catch (error) {
    console.log(error);
  }
}

export function* changeStatusTaskSaga() {
  yield takeEvery('tasks/changeStatusTask', changeStatusTask);
}
