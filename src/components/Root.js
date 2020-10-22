import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import {HomePage, Test01, Login, Counter, ConnectCounterContainer, ReduxActionCounterContainer, CounterPage, ExpressPage, ReduxPage, SagaPage, WebworkerPage} from "../pages";
import {Switch} from "react-router";


function Root(props) {
    return (
        <Router>
            <Route path="/homePage" component={HomePage}></Route>
            <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route path="/test01" component={Test01}></Route>
                
                <Route path="/connCounter" component={ConnectCounterContainer}></Route>
                <Route path="/reduxActionCounter" component={ReduxActionCounterContainer}></Route>
                <Route path="/counterPage" component={CounterPage}></Route>
                <Route path="/expressPage" component={ExpressPage}></Route>
                <Route path="/reduxPage" component={ReduxPage}></Route>
                <Route path="/sagaPage" component={SagaPage}></Route>
                <Route path="/webworkerPage" component={WebworkerPage}></Route>
                <Route path="/counter" component={Counter}></Route>
            </Switch>

        </Router>
    );
}

export default Root;