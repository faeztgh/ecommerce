import React from "react";
import Grid from "@material-ui/core/Grid";
import "./home.css";
const Home = () => {
    return (
        <>
            <div className="home-header-container">
                <Grid container spacing={1}>
                    <Grid item>
                        <div className="header-img-wrapper">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/assets/header.jpg"
                                }
                                alt="Header"
                                className="home-header-img"
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Home;
