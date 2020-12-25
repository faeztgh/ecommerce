import React from "react";
import "./App.css";

import {
    HomeContainer,
    Error,
    ShopContainer,
    NavbarContainer,
    About,
} from "./components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <NavbarContainer />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <HomeContainer />}
                    />
                    <Route path="/shop" render={(props) => <ShopContainer />} />
                    <Route path="/about" render={(props) => <About />} />
                    <Route path="/*" render={(props) => <Error />} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
