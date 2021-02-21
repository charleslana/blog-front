import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./app/routes/Routes";
import Footer from "./app/components/footer/Footer";

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;