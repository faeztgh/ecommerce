import { combineReducers } from "redux";
import counterReducer from "./Counter";
import isLoggedReducer from "./IsLogged";
import cartReducer from "./Cart";
import isMobile from "./IsMobile";
const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    cartReducer,
    isMobile,
});

export default allReducers;
