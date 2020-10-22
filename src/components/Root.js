import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {Home, Test01, Login, Counter, ConnectCounterContainer, ReduxActionCounterContainer} from "../pages";
import {Switch} from "react-router";


function Root(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/test01" component={Test01}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/connCounter" component={ConnectCounterContainer}></Route>
                <Route path="/reduxActionCounter" component={ReduxActionCounterContainer}></Route>
                <Route path="/counter" component={Counter}></Route>
            </Switch>

        </Router>
    );
}

export default Root;