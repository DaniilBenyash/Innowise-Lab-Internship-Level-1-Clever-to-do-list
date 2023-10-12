import { put, takeEvery } from 'redux-saga/effects';
import { getDatabase, ref, set,  child, get  } from "firebase/database";
import { store } from '../redux/store';

export function* updateTask(action) {
    try {
        const userId = action.payload.userId
        const task = action.payload.task

        const db = getDatabase();
        const dbRef = ref(getDatabase());

        yield get(child(dbRef, userId))
            .then((snapshot) => {
                if(snapshot.exists()) {
                    const tasks = 
                        snapshot.val()
                        .map(el => el.id === task.id ? task : el)

                    set(ref(db, userId), [...tasks] )
                    put(store.dispatch({type: 'tasks/getTasks', payload: userId}))
                }
            }
        ) 
    } catch(error) {
        console.log(error)
    } 
}

export function* updateTaskSaga() {
    yield takeEvery('tasks/updateTask', updateTask)
}