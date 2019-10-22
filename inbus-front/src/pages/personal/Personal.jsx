import React, {Component} from "react"
import Order from "../orders/components/order/Order";
import './Personal.css'

class Personal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookedOrder: {},
            personalOrder: {}
        };

        fetch("http://localhost:8080/customer/personal")
            .then(response => {
                if (response.ok)
                    return response.json()
            })
            .then(commits => {
                this.setState({
                    personalOrder: commits
                })
            });

        fetch("http://localhost:8080/customer/booked")
            .then(response => {
                if (response.ok)
                    return response.json()
            })
            .then(commits => {
                this.setState({
                    bookedOrder: commits
                });
            });

        this.declineBookedOrder = this.declineBookedOrder.bind(this);
        this.deletePersonalOrder = this.deletePersonalOrder.bind(this);
    }

    declineBookedOrder() {
        fetch("http://localhost:8080/customer/booked", {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                this.setState({bookedOrder: null})
            } else {
                console.log("not delete booked order")
            }
        })
    }

    deletePersonalOrder(id) {
        fetch("http://localhost:8080/orders/" + id, {
            method: 'DELETE'
        }).then(response => {
            if (response.ok) {
                this.setState({personalOrder: null})
            } else {
                console.log("not delete personal order")
            }
        })
    }

    render() {
        const {bookedOrder, personalOrder} = this.state;

        return (
            <main>
                <header>
                    <h3>Мои предложения</h3>
                </header>

                <section id="booked_order">
                    <h4 align="center">Забронированные заказы</h4>
                    {bookedOrder &&
                    <Order key={bookedOrder.id} {...bookedOrder} buttonText="Отменить"
                           action={this.declineBookedOrder}/>}
                </section>

                <section id="personal_order">
                    <h4 align="center">Мои заказы</h4>
                    {personalOrder &&
                    <Order key={personalOrder.id} {...personalOrder} buttonText="Удалить"
                           action={this.deletePersonalOrder}/>}
                </section>
            </main>
        )
    }
}

export default Personal