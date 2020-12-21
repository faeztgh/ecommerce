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
export const addToCart = (payload) => {
    return {
        type: "ADD_TO_CART",
        payload: payload,
    };
};
export const removeFromCart = (payload) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: payload,
    };
};
