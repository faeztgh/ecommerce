import { combineReducers } from "redux";
import counterReducer from "./Counter";
import isLoggedReducer from "./IsLogged";
const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
});

export default allReducers;
