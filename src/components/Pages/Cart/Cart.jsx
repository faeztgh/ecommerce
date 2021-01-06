import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./components/product-card/ProductCard";
import { Fab, makeStyles } from "@material-ui/core";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { v1 } from "uuid";
import "./cart.scss";


const Cart = (props) => {
   const { cartArr, total } = props;

    const classes = useStyles();
    return (
        <>
            {cartArr ? (
                <div className="cart-container">
                    {cartArr.map((data) => {
                        return <ProductCard key={v1()} data={data} />;
                    })}
                </div>
            ) : (
                <h1>Your cart is Empty</h1>
            )}
            <div className={classes.root}>
                <Fab variant="extended">
                    <AssignmentTurnedInIcon className={classes.extendedIcon} />
                    Total: {total}.0$
                </Fab>
            </div>
        </>
    );
};

export default Cart;


const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(1),
        right: theme.spacing(1),
        "& > *": {
            margin: theme.spacing(1),
            fontWeight: "bold",
            color: "#1f1f1f",
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));