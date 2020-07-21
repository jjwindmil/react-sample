import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Home, Test01} from "../pages";
import {Login} from "../pages/Login";
import {Switch} from "react-router";


function Root(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/test01" component={Test01}></Route>
                <Route path="/home" component={Home}></Route>
            </Switch>

        </Router>
    );
}

export default Root;