import React from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./productsRowSec.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/Actions";

import { Button } from "@material-ui/core";
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
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="large"
                                    endIcon={<ShoppingCartIcon />}
                                    onClick={()=>dispatch(addToCart(item))}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    ))}
                />
            </div>
        </>
    );
};

export default ProductsRowSec;
