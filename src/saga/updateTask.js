import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { todoService } from '../dataBaseServices/todoService';

export function* updateTask(action) {
  try {
    const userId = action.payload.userId;
    const task = action.payload.task;
    const tasks = yield todoService.getTasks(userId);

    const changedTasks = yield todoService.updateTask(task, userId, tasks);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: changedTasks }));
  } catch (error) {
    yield alert(error);
  }
}

export function* updateTaskSaga() {
  yield takeEvery('tasks/updateTask', updateTask);
}
