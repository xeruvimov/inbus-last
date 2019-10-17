import React from 'react';
import AboutUs from "./pages/aboutus/AboutUs";
import ListOrders from "./pages/orders/ListOrders";
import Navigation from "./pages/navigation/Navigation";
import {HashRouter, Route} from "react-router-dom"
import './App.css';
import './pages/navigation/Navigation.css'


function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navigation/>
                <div className="content">
                    <Route exact path="/" component={ListOrders}/>
                    <Route path="/about" component={AboutUs}/>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;