import React, {Component} from "react";
import './OrderInformation.css'

class OrderInformation extends Component {
    render() {
        return(
            <div className="information">
                <div className="route-price">
                    <h4 className="common-text">{this.props.numberRoute} автобус</h4>
                    <h4 className="common-text">{this.props.price} рублей</h4>
                </div>
                <div className="time-and-car-number">
                    <div className="time">
                        <img src="./time.png" alt="time"/>
                        <p>5 минут назад</p>
                    </div>
                    <div className="car-number">
                        <p className="common-text">{this.props.numberAuto}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderInformation