import { combineReducers } from 'redux';
import userDataReducer from '../features/userData/userData';
import tasksReducer from '../features/tasks/tasks';

const rootReducer = combineReducers({
  userData: userDataReducer,
  tasks: tasksReducer
});

export default rootReducer;
