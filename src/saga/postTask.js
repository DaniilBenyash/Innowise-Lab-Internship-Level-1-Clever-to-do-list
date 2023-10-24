import { put, takeEvery } from 'redux-saga/effects';
import { todoService } from '../dataBaseServices/todoService';
import { store } from '../redux/store';

export function* postTask(action) {
  try {
    const userId = action.payload.userId;
    const task = action.payload.task;
    const tasks = yield todoService.getTasks(userId);

    const changedTasks = yield todoService.postTask(task, userId, tasks);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: changedTasks }));
  } catch (error) {
    yield alert(error);
  }
}

export function* postTaskSaga() {
  yield takeEvery('tasks/postTask', postTask);
}
