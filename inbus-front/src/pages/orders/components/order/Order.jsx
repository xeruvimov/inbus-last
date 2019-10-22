import React, {Component} from "react";
import {withRouter} from "react-router-dom"
import OrderDescription from "../orderdescription/OrderDescription";
import OrderInformation from "../information/OrderInformation"
import './Order.css'
import './accordion.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisibleDescription: false,
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler() {
        if (this.props.type === "none") {
            this.bookingOrder()
        } else if (this.props.type === "booked") {
            this.declineBookedOrder()
        } else if (this.props.type === "personal") {
            this.deletePersonalOrder()
        }
    }

    showDropdown() {
        this.setState({
            isVisibleDescription: !this.state.isVisibleDescription
        })
    }

    render() {

        let {id, numberRoute, numberAuto, price, description, action, buttonText} = this.props;

        return (
            <article id={id} className="order">
                <header>
                    <OrderInformation numberRoute={numberRoute} price={price} numberAuto={numberAuto}/>
                    <div className="action">
                        <button className="button" onClick={this.showDropdown}>
                            <p className="button-text">Подробнее</p>
                        </button>
                        <button className="button" onClick={()=>action(id)}>
                            <p className="button-text">{buttonText}</p>
                        </button>
                    </div>
                </header>
                <div className={this.state.isVisibleDescription ? "dropdown-item-active" : "dropdown-item-inactive"}>
                    <OrderDescription description={description}/>
                </div>
            </article>
        );
    }
}

export default withRouter(Order);