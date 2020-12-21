const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let product = [...state];
            product.push(action.payload);
            return product;
        case "REMOVE_FROM_CART":
            return (state = state.filter((el) => el !== action.payload));

        default:
            return state;
    }
};

export default cartReducer;
