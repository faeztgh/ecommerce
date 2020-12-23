import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./product.css";
import { addToCart } from "../redux/actions/Actions";
import Product from "./Product";
import { ProductInfoDialog } from "../Dialogs";

const ProductsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    // Redux
    const dispatch = useDispatch();
    // Fetching data handling
    const fetchData = async () => {
        try {
            const url = process.env.REACT_APP_API_URL;
            const result = await axios(url);
            setData(result.data);
            setLoading(false);
            filterData(result.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    // More info dialog implementing
    const [dialogData, setDialogData] = useState({});
    const [openProductInfoDialog, setOpenProductInfoDialog] = useState(false);
    const [
        scrollForProductInfoDialog,
        setScrollForProductInfoDialog,
    ] = useState("paper");

    const handleClickOpenProdcutInfoDialog = (scrollType, dialogData) => () => {
        setOpenProductInfoDialog(true);
        setScrollForProductInfoDialog(scrollType);
        setDialogData(dialogData);
    };

    const handleCloseProductInfoDialog = () => {
        setOpenProductInfoDialog(false);
    };

    // filtering data
    const [filteredData, setFilteredData] = useState([]);
    const filterData = (data) => {
        let filtered = data.filter((item) => item.category !== "jewelery");
        filtered = filtered.filter((o) => o.category !== "electronics");
        setFilteredData(filtered);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <>
            {loading ? (
                <div>
                    <h1>loading</h1>
                </div>
            ) : (
                <>
                    <div className="products-container">
                        <Grid
                            container
                            spacing={4}
                            alignContent="space-between"
                        >
                            {filteredData.map((item) => {
                                return (
                                    <Product
                                        key={item.id}
                                        product={item}
                                        dispatch={dispatch}
                                        addToCart={addToCart}
                                        openProductinfoDialog={
                                            openProductInfoDialog
                                        }
                                        handleCloseProductInfoDialog={
                                            handleCloseProductInfoDialog
                                        }
                                        scrollProductInfoDialog={
                                            scrollForProductInfoDialog
                                        }
                                        handleClickOpenProdcutInfoDialog={
                                            handleClickOpenProdcutInfoDialog
                                        }
                                        dialogData={dialogData}
                                    />
                                );
                            })}
                        </Grid>
                    </div>
                </>
            )}
        </>
    );
};

export default ProductsContainer;
