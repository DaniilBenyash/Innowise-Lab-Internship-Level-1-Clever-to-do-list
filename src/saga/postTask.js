import { put, takeEvery } from 'redux-saga/effects';
import { getDatabase, ref, set,  child, get  } from "firebase/database";

export function* postTask(action) {
    try {
        const id = action.payload.id
        const task = action.payload.task
        const db = getDatabase();
        const dbRef = ref(getDatabase());

        yield put(
        get(child(dbRef, id))
            .then((snapshot) => {
                set(ref(db, id), snapshot.exists() ? [...snapshot.val(), task] : [task])
            })
        )
    } catch(error) {
        console.log(error)
    } 
}

export function* postTaskSaga() {
    yield takeEvery('tasks/postTask', postTask)
}