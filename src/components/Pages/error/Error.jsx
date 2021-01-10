import React from "react";
import Grid from "@material-ui/core/Grid";
import "./error.scss";
import ErrorImg from "./404.png";
const Error = () => {
    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} className="error-container">
                    <img src={ErrorImg} alt="" className="error-img" />
                </Grid>
            </Grid>
        </>
    );
};

export default Error;
