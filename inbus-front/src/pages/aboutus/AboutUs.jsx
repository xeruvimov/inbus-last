import React, {Component} from "react"
import "./AboutUs.css"

class AboutUs extends Component {
    render() {
        return (
            <main>
                <header>
                    <h3>О нас</h3>
                </header>
                <section className="description">
                    <h4>Я сидел - меня возили</h4>
                    <p>
                        Сегодня множество людей пользуются общественным транспортом. Миллионы человек ежедневно
                        добираются из одной точки до другой, стоя в заполненном автобусе. Такое стояние мало кому
                        доставляет удовольствие, а значит, это надо решать. Очевидным решением станет увеличение
                        количества автобусов в городе на заполненных маршрутах. Но это очень затратное решение и на его
                        реализацию требуется множество денег. Мы предлагаем альтернативу. Наш сайт позволяет любому
                        желающему, который занял сидячее место в автобусе, выложить его на продажу. А другой
                        человек, который едет в том же автобусе или же стоит на остановке в ожидании, сможет купить это
                        самое сидячее место и доехать до нужной точки с комфортом.
                    </p>
                </section>
                <footer>
                    <p align="center">Возилы™ все права защищены, все нарушения караются</p>
                    <p align="center" className="sponsor"><a href="https://www.twitch.tv/dashducks">Наши спонсоры</a>
                    </p>
                </footer>
            </main>
        );
    }
}

export default AboutUs;