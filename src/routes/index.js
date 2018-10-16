import React from "react";
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

import {Home} from "../pages";
import Shortcuts from "../pages/Shortcuts";

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                component={Home}
            />
            <Route
                exact
                path="/shortcuts"
                component={Shortcuts}
            />
            <Redirect to="/"/>
        </Switch>
    )
}

export default Routes;