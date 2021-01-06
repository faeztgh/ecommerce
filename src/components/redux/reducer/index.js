import { combineReducers } from "redux";
import isLoggedReducer from "./IsLogged";
import cartReducer from "./Cart";
import isMobile from "./IsMobile";
import authReducer from "./authReducer";
import ScSizeReducer from "./ScSize";

const allReducers = combineReducers({
    isLoggedReducer,
    cartReducer,
    isMobile,
    authReducer,
    ScSizeReducer,
});

export default allReducers;
