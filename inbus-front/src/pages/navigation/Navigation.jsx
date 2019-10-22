import React, {Component} from "react";
import {NavLink} from "react-router-dom"
import './Navigation.css'

class Navigation extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink exact to="/">Предложения</NavLink></li>
                    <li><NavLink to="/create">Создать заказ</NavLink></li>
                    <li><NavLink to="/personal">Личный кабинет</NavLink></li>
                    <li><NavLink to="/about">О нас</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation