import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../views/home/Home";
import About from "../views/about/About";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import ScrollToTop from "../components/scroll/ScrollToTop";
import Title from "../components/title/Title";

class Routes extends Component {

    render() {
        return (
            <ScrollToTop>
                <Switch>
                    <Route path={'/'} exact={true}
                           render={(props) =>
                               (<Title text={'Home'}><Home/></Title>)}
                    />
                    <Route path={'/about'} exact={true}
                           render={(props) =>
                               (<Title text={'About'}><About/></Title>)}
                    />
                    <Route path={'/login'} exact={true}
                           render={(props) =>
                               (<Title text={'Login'}><Login/></Title>)}
                    />
                    <Route path={'/register'} exact={true}
                           render={(props) =>
                               (<Title text={'Register'}><Register/></Title>)}
                    />
                </Switch>
            </ScrollToTop>
        );
    }
}

export default Routes;