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
            })
    }

    render() {
        return (
            <main>
                <SearchHeader/>
                <div>
                    {this.state.orders.map(order => {
                        return <Order key={order.id} order={order} type="none"/>
                    })}
                </div>
            </main>
        )
    }
}

export default ListOrders;