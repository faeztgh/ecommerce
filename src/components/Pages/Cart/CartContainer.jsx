import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
const CartContainer = () => {
    // grab arrays of chosen product from redux store
    const cartArr = useSelector((state) => state.cartReducer);



    // set the total price
    let total = 0;
    if (cartArr !== []) {
        const totalPriceArr = cartArr.map((item) => item.price * item.count);
        if (totalPriceArr.length > 1) {
            total = Math.floor(totalPriceArr.reduce((a, b) => a + b));
        } else {
            total = totalPriceArr[0];
        }
    } else {
        total = 0;
    }

    return (
        <>
            <Cart cartArr={cartArr} total={total} />
        </>
    );
};

export default CartContainer;
