import React from "react";
import {
    AccessoriesSec,
    HomeHeader,
    WMHero,
    ProductsRowSec,
} from "./components";

import { Footer } from "../../../components";
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
