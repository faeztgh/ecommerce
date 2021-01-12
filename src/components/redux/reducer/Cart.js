import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const removeDuplicateProducts = (products) => {
   return products.filter((value,index,array)=>array.findIndex(t=>(t.id === value.id))===index);
   
};


// get cart array from local storage
const getFromleLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("CART_DATA"));
    if (data) {
        return data;
    } else {
        return [];
    }
};

// save cart array into local storage
const setLocalStorage = (cartArr) => {
    localStorage.setItem("CART_DATA", JSON.stringify(cartArr));
};

let initState = getFromleLocalStorage();

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        // add product to cart
        case ADD_TO_CART:
            let product = [...state];
            setLocalStorage(state);
            product.push(action.payload);
            const finalProducts = removeDuplicateProducts(product);
           
            return finalProducts;
        // remove product from cart
        case REMOVE_FROM_CART:
            state = state.filter((el) => el !== action.payload);
            setLocalStorage(state);
            return state;

        default:
            return state;
    }
};

export default cartReducer;
