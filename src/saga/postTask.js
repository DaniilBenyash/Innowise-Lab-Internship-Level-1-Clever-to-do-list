import { put, takeEvery } from 'redux-saga/effects';
import { getDatabase, ref, set,  child, get  } from "firebase/database";

export function* postTask(action) {
    try {
        const userId = action.payload.userId
        const task = action.payload.task
        const db = getDatabase();
        const dbRef = ref(getDatabase());

        yield get(child(dbRef, userId))
            .then((snapshot) => {
                put(set(ref(db, userId), snapshot.exists() ? [...snapshot.val(), task] : [task]))
            }
        )

    } catch(error) {
        console.log(error)
    } 
}

export function* postTaskSaga() {
    yield takeEvery('tasks/postTask', postTask)
}