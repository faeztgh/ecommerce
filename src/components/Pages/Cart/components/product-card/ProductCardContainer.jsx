import React from "react";
import { useDispatch } from "react-redux";
import {
    addToCartAction,
    removeFromCartAction,
} from "../../../../redux/actions/Actions";
import ProductCard from "./ProductCard";

const ProductCardContainer = (props) => {
    const { data } = props;

    const dispatch = useDispatch();

    // increasing item count
    const handleIncreaseProductCount = (product) => {
        product.count = product.count + 1;

        dispatch(addToCartAction(product));
    };

    // decreasing item count
    const handleDecreaseProductCount = (product) => {
        if (product.count > 1) {
            product.count = product.count - 1;
        } else {
            product.count = 1;
        }
        dispatch(addToCartAction(product));
    };

    const handleRemoveProduct = (product) => {
        dispatch(removeFromCartAction(product));
    };

    return (
        <>
            <ProductCard
                data={data}
                handleIncreaseProductCount={handleIncreaseProductCount}
                handleDecreaseProductCount={handleDecreaseProductCount}
                handleRemoveProduct={handleRemoveProduct}
            />
        </>
    );
};

export default ProductCardContainer;
