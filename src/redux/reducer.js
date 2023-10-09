import registerReducer from "../features/register/registerSlice";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    register: registerReducer,
})

export default rootReducer