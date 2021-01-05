import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Button from "../../../../Buttons/Button";
import { Link } from "react-router-dom";
import "./homeHeader.css";
const HomeHeader = () => {
    return (
        <>
            <div className="home-header-container">
                <Grid container spacing={1}>
                    <div className="header-img-wrapper">
                        <picture className="home-header-img">
                            <source
                                media="(max-width: 1080px)"
                                data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_1100x.jpg?v=1607353165"
                                srcSet="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_1100x.jpg?v=1607353165"
                            />
                            <source
                                media="(max-width: 1400px)"
                                data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_2000x.jpg?v=1607353165"
                                srcSet="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_2000x.jpg?v=1607353165"
                            />
                            <source
                                media="(max-width: 1600px)"
                                data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_2500x.jpg?v=1607353165"
                                srcSet="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER_2500x.jpg?v=1607353165"
                            />
                            <img
                                data-src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER.jpg?v=1607353165"
                                alt=""
                                src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/US_HOME_PAGE_BANNER.jpg?v=1607353165"
                            />
                        </picture>
                        <div className="home-header-content-wrapper">
                            <div className="home-header-intro">
                                <h1>New collection</h1>
                                <h6>online shop</h6>
                            </div>
                            <div className="home-header-button-wrapper">
                                <Button variant="contained">
                                    <Link to="/shop">shop now</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        </>
    );
};

export default HomeHeader;
