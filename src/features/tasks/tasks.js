const initialState = []

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'tasks/getTasks': {
            return state
        }
        case 'tasks/setTasks': {
            return action.payload
        }
        case 'tasks/postTask': {
            return state
        }
        case 'tasks/updateTasks': {
            return state
        }
        case 'tasks/changeStatus': {
            return state
        }
        case 'tasks/deleteTasks': {
            return state
        }
        default:

        return state
    }
  }