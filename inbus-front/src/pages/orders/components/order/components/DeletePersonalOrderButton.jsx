import React, {Component} from "react";

class DeletePersonalOrderButton extends Component {
    constructor(props) {
        super(props);

        this.deletePersonalOrder = this.deletePersonalOrder.bind(this)
    }

    deletePersonalOrder() {
        fetch("http://localhost:8080/orders/" + this.props.id, {
            method: 'DELETE'
        }).then(response => {
            if (response.status === 204) {
                window.location.reload()
            } else {
                console.log("not delete personal order")
            }
        })
    }

    render() {
        return(
            <button className="button" onClick={this.deletePersonalOrder}>
                <p className="button-text">Отменить</p>
            </button>
        )
    }
}

export default DeletePersonalOrderButton