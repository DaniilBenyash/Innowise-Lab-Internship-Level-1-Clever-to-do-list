import { put, takeEvery } from 'redux-saga/effects';
import { getDatabase, ref, set,  child, get  } from "firebase/database";
import { store } from '../redux/store';

export function* changeStatusTask(action) {
    try {
        const userId = action.payload.userId
        const taskId = action.payload.taskId
        const db = getDatabase();
        const dbRef = ref(getDatabase());

        yield get(child(dbRef, userId))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const tasks = 
                    snapshot.val()
                    .map(task => {
                        return task.id === taskId ?
                        {...task, status: !task.status}
                        :
                        task
                    })

                    set(ref(db, userId), [...tasks] )
                    put(store.dispatch({type: 'tasks/getTasks', payload: userId}))
                }
            }
        ) 

    } catch(error) {
        console.log(error)
    } 
}

export function* changeStatusTaskSaga() {
    yield takeEvery('tasks/changeStatusTask', changeStatusTask)
}