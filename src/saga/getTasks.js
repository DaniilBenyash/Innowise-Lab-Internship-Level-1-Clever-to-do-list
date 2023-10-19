import { put, takeEvery } from 'redux-saga/effects';
import { todoService } from '../dataBaseServices/todoService';
import { store } from '../redux/store';

export function* fetchGetTasks(action) {
  try {
    const userId = action.payload;
    const tasks = yield todoService.getTasks(userId);

    yield put(store.dispatch({ type: 'tasks/setTasks', payload: tasks }));
  } catch (error) {
    yield alert(error);
  }
}

export function* getTasksSaga() {
  yield takeEvery('tasks/getTasks', fetchGetTasks);
}
