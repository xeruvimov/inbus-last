import React, {Component} from "react";
import OrderDescription from "../orderdescription/OrderDescription";
import './Order.css'
import './accordion.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisibleDescription: false
        };
        this.showDropdown = this.showDropdown.bind(this);
    }

    showDropdown() {
        this.setState({
            isVisibleDescription: !this.state.isVisibleDescription
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
                <div className={this.state.isVisibleDescription ? "dropdown-item-active" : "dropdown-item-inactive"}>
                    <OrderDescription description={this.props.order.description}/>
                </div>
            </article>
        );
    }
}

export default Order;