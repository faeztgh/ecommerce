import React from "react";
import "./App.css";

import {
    HomeContainer,
    Error,
    ShopContainer,
    NavbarContainer,
    About,
    UserDashboardContainer,
    Login,
    Signup,
    PrivateRoute,
    ForgotPassword,
} from "./components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <NavbarContainer />
                <Switch>
                    <Route exact path="/" render={() => <HomeContainer />} />
                    <Route path="/shop" render={() => <ShopContainer />} />
                    <Route path="/about" render={() => <About />} />
                    <Route path="/login" render={() => <Login />} />
                    <Route path="/signup" render={() => <Signup />} />
                    <Route
                        path="/forgot-password"
                        render={() => <ForgotPassword />}
                    />

                    <PrivateRoute
                        exact
                        path="/user-dashboard"
                        render={() => <UserDashboardContainer />}
                    />
                    <Route path="/*" render={() => <Error />} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
