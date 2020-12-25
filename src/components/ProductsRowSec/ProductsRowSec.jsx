import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./productsRowSec.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../redux/actions/Actions";

import { Button } from "@material-ui/core";
import MyButton from "../Button/Button";
const ProductsRowSec = () => {
    const data = [
        {
            id: 0,
            src: "/assets/1.jpg",
        },
        {
            id: 1,
            src: "/assets/2.jpg",
        },
        {
            id: 2,
            src: "/assets/3.jpg",
        },
        {
            id: 3,
            src: "/assets/1.jpg",
        },
        {
            id: 4,
            src: "/assets/2.jpg",
        },
        {
            id: 5,
            src: "/assets/3.jpg",
        },
    ];

    const dispatch = useDispatch();
    return (
        <>
            <div className="products-scrolling-section">
                <ScrollMenu
                    arrowLeft={
                        <div className="scroll-arrow">
                            {<ArrowBackIosIcon />}
                        </div>
                    }
                    arrowRight={
                        <div className="scroll-arrow">
                            {<ArrowForwardIosIcon />}
                        </div>
                    }
                    data={data.map((item) => (
                        <div key={item.id} className="scroling-picture">
                            <img
                                alt="test"
                                src={process.env.PUBLIC_URL + item.src}
                            />

                            <div className="scrolling-img-btn">
                                <MyButton
                                    variant="contained"
                                    color="default"
                                    size="large"
                                    endIcon={<ShoppingCartIcon />}
                                    onClick={() => dispatch(addToCartAction(item))}
                                >
                                    Add to cart
                                </MyButton>
                            </div>
                        </div>
                    ))}
                />
            </div>
        </>
    );
};

export default ProductsRowSec;
