import React, {Component} from "react";

class DeclineBookedOrderButton extends Component {
    constructor(props) {
        super(props);

        this.declineBookedOrder = this.declineBookedOrder.bind(this)
    }

    declineBookedOrder() {
        fetch("http://localhost:8080/customer/booked", {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                window.location.reload()
            } else {
                console.log("not delete booked order")
            }
        })
    }

    render() {
        return(
            <button className="button" onClick={this.declineBookedOrder}>
                <p className="button-text">Отменить</p>
            </button>
        )
    }
}

export default DeclineBookedOrderButton