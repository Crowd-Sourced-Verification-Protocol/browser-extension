import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from "./routes/About";
import Landing from "./routes/Landing";
import 'antd/dist/antd.css';
import './App.css';

export const App = () => {
    return (
        <Switch>
            <Route path="/about">
                <About/>
            </Route>
            <Route path="/">
                <Landing/>
            </Route>
        </Switch>
    )
};
