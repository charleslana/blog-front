import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/header/Header";
import Routes from "./routes/Routes";

class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header/>
                    <Routes/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;