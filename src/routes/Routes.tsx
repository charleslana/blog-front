import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../views/home/Home";
import About from "../views/about/About";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import ScrollToTop from "../components/scroll/ScrollToTop";

class Routes extends Component {

    render() {
        return (
            <ScrollToTop>
                <Switch>
                    <Route path={'/'} exact={true} component={Home}/>
                    <Route path={'/about'} exact={true} component={About}/>
                    <Route path={'/login'} exact={true} component={Login}/>
                    <Route path={'/register'} exact={true} component={Register}/>
                </Switch>
            </ScrollToTop>
        );
    }
}

export default Routes;