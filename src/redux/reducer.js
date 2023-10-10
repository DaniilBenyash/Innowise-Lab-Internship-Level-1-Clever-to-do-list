import { combineReducers } from 'redux';
import userDataReducer from "../features/userData/userData";
import signUpReducer from "../features/signUp/signUp";
import signInReducer from '../features/signIn/signIn';

const rootReducer = combineReducers({
    userData: userDataReducer,
    signUp: signUpReducer,
    signIn: signInReducer,
})

export default rootReducer