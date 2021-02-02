import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";
import Footer from "./components/footer/Footer";

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