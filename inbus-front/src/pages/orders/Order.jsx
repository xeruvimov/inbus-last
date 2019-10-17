import React, {Component} from "react";
import './Order.css'
import './accordion.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        };
        this.showDropdown = this.showDropdown.bind(this);
    }

    showDropdown() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    render() {
        return (
            <article id={this.props.order.id} className="order">
                <header>
                    <div className="information">
                        <div className="route_price">
                            <h4>{this.props.order.numberRoute}</h4>
                            <h4>{this.props.order.price} рублей</h4>
                        </div>
                        <div className="time&car_number">
                            <div className="time">
                                <img src="./time.png" alt="time"/>
                                <p>5 минут назад</p></div>
                            <div className="car_number">
                                <p>{this.props.order.numberAuto}</p>
                            </div>
                        </div>
                    </div>
                    <div className="action">
                        <button className="more" onClick={this.showDropdown}><p>Подробнее</p></button>
                        <button className="bookmark"><p>Забронировать</p></button>
                    </div>
                </header>
                <div className={this.state.isVisible ? "dropdown-item-active" : "dropdown-item-inactive"}>
                    <div className="description">
                        <h4 align="center">Описание</h4>
                        <p>{this.props.order.description}</p>
                        <img src="./gps_label.png" alt="MAP"/>
                    </div>
                </div>
            </article>
        );
    }
}

export default Order;