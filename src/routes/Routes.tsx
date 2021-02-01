import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../views/home/Home";
import About from "../views/about/About";
import Login from "../views/login/Login";
import Register from "../views/register/Register";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path={'/'} exact={true} component={Home}/>
                <Route path={'/about'} exact={true} component={About}/>
                <Route path={'/login'} exact={true} component={Login}/>
                <Route path={'/register'} exact={true} component={Register}/>
            </Switch>
        );
    }
}

export default Routes;