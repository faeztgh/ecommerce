import React from "react";
import AccessoriesSec from "../../AccessoriesSec";
import HomeHeader from "../../HomeHeader";
import ProductsRowSec from "../../ProductsRowSec";
import WMHero from "../../WMHero";

import "./home.css";

const Home = () => {
    return (
        <>
            <HomeHeader />
            <WMHero />
            <ProductsRowSec />
            <AccessoriesSec />
        </>
    );
};

export default Home;
