import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SET_SC_WIDTH,
    SET_SC_HEIGHT,
    SIGN_IN,
} from "../types";

export const isLoggedAction = (userObj) => {
    return {
        type: SIGN_IN,
        payload: userObj,
    };
};

// ADD or Remove Object from cart
export const addToCartAction = (payload) => {
    return {
        type: ADD_TO_CART,
        payload: payload,
    };
};
export const removeFromCartAction = (payload) => {
    return {
        type: REMOVE_FROM_CART,
        payload: payload,
    };
};

// is mobile action
export const isMobileAction = () => {
    return {
        type: "IS_MOBILE",
    };
};

export const setScWidth = (sizeObj) => {
    return {
        type: SET_SC_WIDTH,
        payload: sizeObj,
    };
};
export const setScHeight = (sizeObj) => {
    return {
        type: SET_SC_HEIGHT,
        payload: sizeObj,
    };
};
