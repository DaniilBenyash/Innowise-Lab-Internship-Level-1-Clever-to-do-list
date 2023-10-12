import { put, takeEvery } from 'redux-saga/effects';
import { getDatabase, ref, onValue  } from "firebase/database";
import { store } from '../redux/store';

export function* fetchGetTasks(action) {
    try {
        const id = action.payload
        const db = getDatabase();
        const starCountRef = ref(db, id);
        
        yield onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            put(store.dispatch({type: 'tasks/setTasks', payload: data}))
        })
        
    } catch(error) {
        yield console.log(error)
    } 
}

export function* getTasksSaga() {
    yield takeEvery('tasks/getTasks', fetchGetTasks)
}