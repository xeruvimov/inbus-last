import React, {Component} from "react";
import './OrderDescription.css'

class OrderDescription extends Component {
    render() {
        return (
            <div className="description">
                <h4>Описание</h4>
                <p>{this.props.description}</p>
                <img src="./gps_label.png" alt="MAP"/>
            </div>
        );
    }
}

export default OrderDescription