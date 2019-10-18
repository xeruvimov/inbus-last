import React, {Component} from "react";
import {Redirect} from "react-router-dom"
import OrderDescription from "../orderdescription/OrderDescription";
import OrderInformation from "../information/OrderInformation"
import BookingOrderButton from "./components/BookingOrderButton";
import DeclineBookedOrderButton from "./components/DeclineBookedOrderButton";
import DeletePersonalOrderButton from "./components/DeletePersonalOrderButton";
import './Order.css'
import './accordion.css'

class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisibleDescription: false,
            redirectToPersonal: false
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
        if (this.state.redirectToPersonal) {
            return <Redirect to="/personal"/>
        }

        let actionButton;

        if (this.props.type === "none") {
            actionButton = <BookingOrderButton key={this.props.id} id={this.props.id}/>
        } else if (this.props.type === "booked") {
            actionButton = <DeclineBookedOrderButton key={this.props.id}/>
        } else if (this.props.type === "personal") {
            actionButton = <DeletePersonalOrderButton key={this.props.id} id={this.props.id}/>
        }

        return (
            <article id={this.props.id} className="order">
                <header>
                    <OrderInformation numberRoute={this.props.numberRoute} price={this.props.price}
                                      numberAuto={this.props.numberAuto}/>
                    <div className="action">
                        <button className="button" onClick={this.showDropdown}>
                            <p className="button-text">Подробнее</p>
                        </button>
                        {actionButton}
                    </div>
                </header>
                <div className={this.state.isVisibleDescription ? "dropdown-item-active" : "dropdown-item-inactive"}>
                    <OrderDescription description={this.props.description}/>
                </div>
            </article>
        );
    }
}

export default Order;