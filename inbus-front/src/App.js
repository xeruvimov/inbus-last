import React from 'react';
import AboutUs from "./pages/aboutus/AboutUs";
import ListOrders from "./pages/orders/ListOrders";
import {HashRouter, NavLink, Route} from "react-router-dom"
import './App.css';
import './pages/navigation/Navigation.css'


function App() {
    return (
        <HashRouter>
            <div className="App">
                <div className="flexBox">
                    <nav>
                        <ul>
                            <li><NavLink exact to="/">Предложения</NavLink></li>
                            <li><NavLink to="/create">Создать заказ</NavLink></li>
                            <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                            <li><NavLink to="/about">О нас</NavLink></li>
                        </ul>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={ListOrders}/>
                        <Route path="/about" component={AboutUs}/>
                    </div>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
