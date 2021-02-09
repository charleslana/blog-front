import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./app/components/header/Header";
import Routes from "./app/routes/Routes";
import Footer from "./app/components/footer/Footer";

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;