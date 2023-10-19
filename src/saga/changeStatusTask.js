import { put, takeEvery } from 'redux-saga/effects';
import { store } from '../redux/store';
import { todoService } from '../dataBaseServices/todoService';

export function* changeStatusTask(action) {
  try {
    const userId = action.payload.userId;
    const taskId = action.payload.taskId;

    const tasks = yield todoService.changeStatusTask(taskId, userId);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: tasks }));
  } catch (error) {
    yield alert(error);
  }
}

export function* changeStatusTaskSaga() {
  yield takeEvery('tasks/changeStatusTask', changeStatusTask);
}
