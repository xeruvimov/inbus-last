import React, {useState} from "react"
import {withRouter} from "react-router-dom";
import './CreateOrder.css'

function CreateOrder(props) {
    const [numberRoute, setNumberRoute] = useState('');
    const [numberBus, setNumberBus] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    function createOrder() {
        if (isValidInput()) {
            let date = new Date();
            let data = {
                numberRoute: numberRoute,
                numberAuto: numberBus,
                description: description,
                price: price,
                date: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
            };

            fetch('http://localhost:8080/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (response.ok) {
                    props.history.push('/personal')
                }
            });
        }
    }

    function isValidInput() {
        if (numberRoute === '' || numberBus === '' || price === '' || description === '') {
            alert("Введите информацию о заказе");
            return false
        }
        return true
    }

    return (
        <main>
            <header>
                <h3>Создание заказа</h3>
            </header>
            <section className="information-create">
                <article>
                    <p>Номер маршрута:</p>
                    <input id="number_route" type="text" value={numberRoute}
                           onInput={e => setNumberRoute(e.target.value)}/>
                </article>
                <article>
                    <p>Номер автобуса:</p>
                    <input id="number_bus" type="text" value={numberBus} onInput={e => setNumberBus(e.target.value)}/>
                </article>
                <article>
                    <p>Стоимость:</p>
                    <input id="price" type="text" value={price} onInput={e => setPrice(e.target.value)}/>
                </article>
            </section>

            <section className="description">
                <p>Описание:</p>
                <textarea id="description" value={description} onInput={event => setDescription(event.target.value)}/>
            </section>

            <footer className={"footer-create-order"}>
                <button onClick={createOrder}>
                    <p>Отправить</p>
                </button>
            </footer>
        </main>
    )
}

export default withRouter(CreateOrder)