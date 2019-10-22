import React, {Component} from "react"
import SearchHeader from "./components/searchheader/SearchHeader";
import Order from './components/order/Order'
import './ListOrders.css'

class ListOrders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            orders: []
        };

        fetch("http://localhost:8080/orders")
            .then(response => response.json())
            .then(commits => {
                this.setState({
                    orders: commits
                })
            });

        this.bookingOrder = this.bookingOrder.bind(this);
    }

    bookingOrder(id) {
        fetch("http://localhost:8080/customer/booked/" + id, {
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
        return (
            <main>
                <SearchHeader/>
                <div>
                    {this.state.orders.map(order => {
                        return <Order key={order.id} {...order} buttonText="Забронировать" action={this.bookingOrder}/>
                    })}
                </div>
            </main>
        )
    }
}

export default ListOrders;