import React, {Component} from "react";
import {withRouter} from "react-router-dom";

class BookingOrderButton extends Component {
    constructor(props) {
        super(props);

        this.bookingOrder = this.bookingOrder.bind(this)
    }

    bookingOrder() {
        fetch("http://localhost:8080/customer/booked/" + this.props.id, {
            method: 'PUT'
        }).then(response => {
            if (response.ok) {
                this.props.history.push("/personal")
            } else {
                console.log("not booking")
            }
        })
    }

    render() {
        return(
            <button className="button" onClick={this.bookingOrder}>
                <p className="button-text">Забронировать</p>
            </button>
        )
    }
}

export default withRouter(BookingOrderButton)