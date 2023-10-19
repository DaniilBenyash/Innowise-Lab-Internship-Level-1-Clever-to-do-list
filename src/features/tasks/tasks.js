const initialState = [];

export default function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'tasks/setTasks': {
      if (!action.payload) return [];
      return action.payload;
    }
    default:
      return state;
  }
}
