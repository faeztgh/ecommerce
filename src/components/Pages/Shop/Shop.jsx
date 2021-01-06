import React from "react";
import ProductsContainer from "./components/Products";
import "./shop.scss";
const Shop = () => {
    return (
        <>
            <div className="shop-container">
                <ProductsContainer />
            </div>
        </>
    );
};

export default Shop;
