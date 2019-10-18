import React, {Component} from "react"
import Order from "../orders/components/order/Order";

// import './Personal.css'

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
                // console.table(this.state.bookedOrder)
            });
    }

    render() {
        return (
            <main>
                <header>
                    <h3>Мои предложения</h3>
                </header>

                <section id="booked_order">
                    <h4 align="center">Забронированные заказы</h4>
                    {this.state.bookedOrder &&
                    <Order key={this.state.bookedOrder.id} order={this.state.bookedOrder} type="booked"/>}
                </section>

                <section id="personal_order">
                    <h4 align="center">Мои заказы</h4>
                    {this.state.personalOrder &&
                    <Order key={this.state.personalOrder.id} order={this.state.personalOrder} type="personal"/>}
                </section>
            </main>
        )
    }
}

export default Personal