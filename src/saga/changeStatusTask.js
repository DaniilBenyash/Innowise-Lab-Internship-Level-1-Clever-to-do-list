import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { todoService } from '../dataBaseServices/todoService';

export function* changeStatusTask(action) {
  try {
    const userId = action.payload.userId;
    const taskId = action.payload.taskId;
    const tasks = yield todoService.getTasks(userId);

    const changedTasks = yield todoService.changeStatusTask(taskId, userId, tasks);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: changedTasks }));
  } catch (error) {
    yield alert(error);
  }
}

export function* changeStatusTaskSaga() {
  yield takeEvery('tasks/changeStatusTask', changeStatusTask);
}
