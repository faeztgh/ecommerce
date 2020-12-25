export const increment = () => {
    return {
        type: "INCREMENT",
    };
};

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
};
export const resetCounter = () => {
    return {
        type: "RESET",
    };
};

export const isLoggedAction = () => {
    return {
        type: "SIGN_IN",
    };
};

// ADD or Remove Object from cart
export const addToCartAction = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload,
    };
};
export const removeFromCartAction = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: payload,
    };
};

// is mobile action
export const isMobileAction = () => {
    return {
        type: "IS_MOBILE",
    };
};