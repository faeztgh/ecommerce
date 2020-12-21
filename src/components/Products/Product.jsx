import React from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
const Products = (props) => {
    const { product, dispatch, addToCart } = props;
    const { id, title, category, image, description } = product;
    return (
        <>
            <Grid item lg={4} xl={4} md={6} sm={6} xs={12}>
                <div className="product-card">
                    <h4 className="product-title">{title}</h4>
                    <img key={id} src={image} alt="" className="product-img" />
                    <div className="product-info">
                        <p>{description}</p>
                    </div>
                    <div className="card-footer">
                        <h3 className="product-category">
                            <span>Category : </span>
                            {category}
                        </h3>
                        <Button
                            className="add-to-cart-btn"
                            onClick={() => dispatch(addToCart(product))}
                            variant="contained"
                            color="secondary"
                            endIcon={<ShoppingCartIcon />}
                        >
                            Add
                        </Button>
                        <Button
                            className="more-info-btn mrl"
                            onClick={() => dispatch(addToCart(product))}
                            variant="outlined"
                            color="secondary"
                        >
                           More info
                        </Button>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default Products;
