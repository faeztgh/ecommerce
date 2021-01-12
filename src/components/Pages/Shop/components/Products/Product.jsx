import React from "react";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import ProductInfoDialog from "../../../../Dialogs/ProductInfoDialog";
const Products = (props) => {
    const {
        product,
       
        openProductinfoDialog,
        handleCloseProductInfoDialog,
        scrollProductInfoDialog,
        handleClickOpenProdcutInfoDialog,
        dialogData,
        handleDispatchProduct,
    } = props;
    const { id, title, category, image, price } = product;
    return (
        <>
            <Grid item lg={4} xl={4} md={6} sm={6} xs={12}>
                <div className="product-card">
                    <h4 className="product-title">{title}</h4>
                    <img key={id} src={image} alt="" className="product-img" />

                    <div className="card-footer">
                        <h4 className="product-category">
                            <span>Category : </span>
                            {category}
                        </h4>
                        <h4 className="product-price">
                            <span>Price : </span> ${price}
                        </h4>

                        <Button
                            className="add-to-cart-btn"
                            onClick={()=>handleDispatchProduct(product)}
                            variant="contained"
                            color="secondary"
                            endIcon={<ShoppingCartIcon />}
                        >
                            Add
                        </Button>
                        <Button
                            className="more-info-btn mrl"
                            variant="outlined"
                            color="secondary"
                            onClick={handleClickOpenProdcutInfoDialog(
                                "paper",
                                product
                            )}
                        >
                            More info
                        </Button>
                    </div>
                    {/* product dialog info component*/}
                    <ProductInfoDialog
                        open={openProductinfoDialog}
                        handleClose={handleCloseProductInfoDialog}
                        scroll={scrollProductInfoDialog}
                        product={dialogData}
                    />
                </div>
            </Grid>
        </>
    );
};

export default Products;
