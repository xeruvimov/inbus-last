import React, {Component} from "react"
import SearchHeader from "./SearchHeader";
import Order from './Order'
import './Orders.css'

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
                        return <Order key={order.id} order={order}/>
                    })}
                </div>
            </main>
        )
    }
}

export default ListOrders;