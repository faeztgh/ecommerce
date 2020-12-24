import React from "react";
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
        </>
    );
};

export default Home;
