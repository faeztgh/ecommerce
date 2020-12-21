import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "./product.css";
import { addToCart } from "../redux/actions/Actions";
import Product from "./Product";
const ProductsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState([]);
    const dispatch = useDispatch();
    const fetchData = async () => {
        try {
            const result = await axios("https://fakestoreapi.com/products");
            setData(result.data);
            setLoading(false);
            filterData(result.data);
        } catch (err) {
            console.log(err.message);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const filterData = (data) => {
        let filtered = data.filter((item) => item.category !== "jewelery");
        filtered = filtered.filter((o) => o.category !== "electronics");
        setFilteredData(filtered);
    };


    
    return (
        <>
            {loading ? (
                <div>
                    <h1>loading</h1>
                </div>
            ) : (
                <>
                    <div className="products-container">
                        <Grid container spacing={4} alignContent="space-between">
                            {filteredData.map((item) => {
                                return (
                                    <Product
                                        key={item.id}
                                        product={item}
                                        dispatch={dispatch}
                                        addToCart={addToCart}
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
