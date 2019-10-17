import React, {Component} from "react";
import OrderDescription from "../orderdescription/OrderDescription";
import OrderInformation from "../information/OrderInformation"
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
                    <OrderInformation numberRoute={this.props.order.numberRoute} price={this.props.order.price}
                                      numberAuto={this.props.order.numberAuto}/>
                    <div className="action">
                        <button className="more" onClick={this.showDropdown}>
                            <p className="button-text">Подробнее</p>
                        </button>
                        <button className="bookmark">
                            <p className="button-text">Забронировать</p>
                        </button>
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