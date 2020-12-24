import React from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import {
    HomeContainer,
    Error,
    ShopContainer,
    NavbarContainer,
    About,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const useStyles = makeStyles((theme) => ({}));

    const classes = useStyles();

    const counter = useSelector((state) => state.counterReducer);
    const isLogged = useSelector((state) => state.isLoggedReducer);

    const dispatch = useDispatch();

    return (
        <>
            <Router>
                <NavbarContainer />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <HomeContainer />}
                    />
                    <Route
                        exact
                        path="/shop"
                        render={(props) => <ShopContainer />}
                    />

                    <Route exact path="/about" render={(props) => <About />} />
                    <Route path="/*" render={(props) => <Error />} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
