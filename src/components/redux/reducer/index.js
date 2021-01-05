import { combineReducers } from "redux";
import counterReducer from "./Counter";
import isLoggedReducer from "./IsLogged";
import cartReducer from "./Cart";
import isMobile from "./IsMobile";
import authReducer from "./authReducer";
const allReducers = combineReducers({
    counterReducer,
    isLoggedReducer,
    cartReducer,
    isMobile,
    authReducer,
});

export default allReducers;
