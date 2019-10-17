import React, {Component} from "react"
import './Search.css'

class SearchHeader extends Component {
    render() {
        return(
            <section className="search">
                <h2 align="center">Я сидел - меня возили</h2>
                <div className="search_bus">
                    <article>
                        <input placeholder="Номер автобуса" type="text"/>
                    </article>

                    <article>
                        <input placeholder="Макс цена" type="text"/>
                    </article>

                    <article>
                        <input placeholder="Мин цена" type="text"/>
                    </article>

                    <article>
                        <select>
                            <option>Сортировать по</option>
                            <option>Сначала дешевые</option>
                            <option>Сначала дорогие</option>
                        </select>
                    </article>
                    <article>
                        <button>
                            <p>Поиск</p>
                        </button>
                    </article>
                </div>
            </section>
        )
    }
}

export default SearchHeader