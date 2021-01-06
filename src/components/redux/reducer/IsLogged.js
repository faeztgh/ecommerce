import {  SIGN_IN } from "../types";


const isLoggedReducer = (state = false, action) => {
    switch (action.type) {
        case SIGN_IN:
            action.payload ? (state = true) : (state = false);
            return state;
        default:
            return state;
    }
};

export default isLoggedReducer;
