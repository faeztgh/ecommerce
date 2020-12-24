import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "../Button";
import "./wmhero.css";
import { Link } from "react-router-dom";
const WMHero = () => {
    return (
        <>
            <div className="WMHero-Container">
                <Grid container spacing={0}>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="hero-img-wrapper">
                            <picture>
                                <source
                                    media="(max-width: 600px)"
                                    data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_600x600_crop_center.jpg?v=1607353471"
                                    srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_600x600_crop_center.jpg?v=1607353471"
                                />
                                <source
                                    media="(max-width: 1080px)"
                                    data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_1080x1080_crop_center.jpg?v=1607353471"
                                    srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_1080x1080_crop_center.jpg?v=1607353471"
                                />
                                <img
                                    class="action-block-grid-2x1__block__image lazyloaded"
                                    data-src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_2000x2000_crop_center.jpg?v=1607353471"
                                    alt=""
                                    src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/MENS_HOME_BLOCK_US_2000x2000_crop_center.jpg?v=1607353471"
                                />
                            </picture>

                            <Link className="WHHero-label-man" to="/shop">
                                Man
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                        <div className="hero-img-wrapper">
                            <picture>
                                <source
                                    media="(max-width: 600px)"
                                    data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_600x600_crop_center.jpg?v=1607353601"
                                    srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_600x600_crop_center.jpg?v=1607353601"
                                />
                                <source
                                    media="(max-width: 1080px)"
                                    data-srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_1080x1080_crop_center.jpg?v=1607353601"
                                    srcset="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_1080x1080_crop_center.jpg?v=1607353601"
                                />
                                <img
                                    class="action-block-grid-2x1__block__image lazyloaded"
                                    data-src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_2000x2000_crop_center.jpg?v=1607353601"
                                    alt=""
                                    src="//cdn.shopify.com/s/files/1/0496/8602/0247/files/WOMENS_US_BLOCK_2000x2000_crop_center.jpg?v=1607353601"
                                />
                            </picture>
                            <Link to="/shop" className="WHHero-label-woman">
                                woman
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default WMHero;