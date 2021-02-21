import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "../views/home/Home";
import About from "../views/about/About";
import Login from "../views/login/Login";
import Register from "../views/register/Register";
import ScrollToTop from "../components/scroll/ScrollToTop";
import Title from "../components/title/Title";
import Post from "../views/post/Post";
import Comments from "../views/admin/comments/Comments";
import Header from "../components/header/Header";

class Routes extends Component {

    render() {
        return (
            <ScrollToTop>
                <Switch>
                    <Route path={'/'} exact={true}
                           render={(props) =>
                               (<Title text={'Home'}><Header/><Home storage={props}/></Title>)}
                    />
                    <Route path={'/about'} exact={true}
                           render={(props) =>
                               (<Title text={'About'}><Header/><About/></Title>)}
                    />
                    <Route path={'/login'} exact={true}
                           render={(props) =>
                               (<Title text={'Login'}><Header/><Login/></Title>)}
                    />
                    <Route path={'/register'} exact={true}
                           render={(props) =>
                               (<Title text={'Register'}><Header/><Register/></Title>)}
                    />
                    <Route path={'/post/:id'} exact={true}
                           render={(props) =>
                               (<Title text={'Post'}><Header/><Post storage={props}/></Title>)}
                    />
                    <Route path={'/admin/comments'} exact={true}
                           render={(props) =>
                               (<Title text={'Comments'}><Header/><Comments/></Title>)}
                    />
                </Switch>
            </ScrollToTop>
        );
    }
}

export default Routes;