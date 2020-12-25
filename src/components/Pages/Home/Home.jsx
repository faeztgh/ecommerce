import React from "react";
import AccessoriesSec from "../../AccessoriesSec";
import Footer from "../../Footer";
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
            <Footer />
        </>
    );
};

export default Home;
