import React, {Component} from "react";
import {Redirect} from "react-router-dom"
import OrderDescription from "../orderdescription/OrderDescription";
import OrderInformation from "../information/OrderInformation"
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
        this.bookingOrder = this.bookingOrder.bind(this);
        this.declineBookedOrder = this.declineBookedOrder.bind(this);
        this.deletePersonalOrder = this.declineBookedOrder.bind(this);
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

    bookingOrder() {
        fetch("http://localhost:8080/customer/booked/" + this.props.order.id, {
            method: 'PUT'
        }).then(response => {
            if (response.status === 200) {
                this.setState({
                    redirectToPersonal: true
                })
            } else {
                console.log("not booking")
            }
        })
    }

    declineBookedOrder() {
        fetch("http://localhost:8080/customer/booked", {
            method: 'DELETE'
        }).then(response => {
            if (response.status === 200) {
                this.setState({
                    redirectToPersonal: true
                })
            } else {
                console.log("not delete booked order")
            }
        })
    }

    deletePersonalOrder() {
        fetch("http://localhost:8080/orders/" + this.props.order.id, {
            method: 'DELETE'
        }).then(response => {
            if (response.status === 204) {
                this.setState({
                    redirectToPersonal: true
                })
            } else {
                console.log("not delete personal order")
            }
        })
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

        let bookingButtonText;

        if (this.props.type === "none") {
            bookingButtonText = "Забронировать"
        } else if (this.props.type === "booked") {
            bookingButtonText = "Отменить"
        } else if (this.props.type === "personal") {
            bookingButtonText = "Удалить"
        }

        return (
            <article id={this.props.order.id} className="order">
                <header>
                    <OrderInformation numberRoute={this.props.order.numberRoute} price={this.props.order.price}
                                      numberAuto={this.props.order.numberAuto}/>
                    <div className="action">
                        <button className="button" onClick={this.showDropdown}>
                            <p className="button-text">Подробнее</p>
                        </button>
                        <button className="button" onClick={this.onClickHandler}>
                            <p className="button-text">{bookingButtonText}</p>
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