import { combineReducers } from "redux";
import counterReducer from "./Counter";
import isLoggedReducer from "./IsLogged";
import cartReducer from "./Cart";
const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    cartReducer,
});

export default allReducers;
