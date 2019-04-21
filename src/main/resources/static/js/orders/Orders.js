
function getOrders() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/orders",false);
    xhr.send();

    if (xhr.status == 200) {
        let orders = JSON.parse(xhr.responseText);
        console.log(orders);
        loadOrders(orders);
    }
}

function loadOrders(orders) {
    for (let i = 0; i < orders.length; i++) {
        addOrder(orders[i]);
    }
}

function addOrder(order) {
    let orders = document.getElementById("orders");
    let newOrder = createOrder(order);
    orders.appendChild(newOrder);
}

function createOrder(order) {
    let article = document.createElement("article");
    article.setAttribute("id", order.id);
    article.setAttribute("class", "order");
    let header = createHeader(order);
    article.appendChild(header);
    return article;
}

function createHeader(order) {
    let div = document.createElement("header");
    let information = createInformation(order);
    div.appendChild(information);
    let button = createButton();
    div.appendChild(button);
    return div;
}

function createInformation(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "information");
    let routePrice = createRoutePrice(order);
    div.appendChild(routePrice);
    let timeAndCarNumber = createTimeAndCarNumber(order);
    div.appendChild(timeAndCarNumber);
    return div;
}

function createRoutePrice(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "route_price");
    let numberRoute = createNumberRoute(order);
    div.appendChild(numberRoute);
    let price = createPrice(order);
    div.appendChild(price);
    return div;
}

function createNumberRoute(order) {
    let numberRoute = document.createElement("h4");
    numberRoute.textContent = order.numberRoute;
    return numberRoute;
}

function createPrice(order) {
    let price = document.createElement("h4");
    price.textContent = order.price;
    return price;
}

function createTimeAndCarNumber(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "time&car_number");
    let time = createTime(order);
    div.appendChild(time);
    let carNumber = createCarNumber(order);
    div.appendChild(carNumber);
    return div;
}

function createTime(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "time");
    let img = document.createElement("img");
    img.setAttribute("src", "img/time.png");
    div.appendChild(img);
    let p = document.createElement("p");
    p.textContent = "5 минут назад";
    div.appendChild(p);
    return div;
}

function createCarNumber(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "car_number");
    let p = document.createElement("p");
    p.textContent = order.numberAuto;
    div.appendChild(p);
    return div;
}

function createButton(order) {
    let button = document.createElement("button");
    button.setAttribute("onclick", "addDiscription(" + order.id + ")");
    let p = createButtonText();
    button.appendChild(p);
    return button;
}

function createButtonText() {
    let p = document.createElement("p");
    p.textContent = "Подробнее";
    return p;
}

/*function clearOrders() {
    let orders = document.getElementById("orders");
    let order = orders.getElementsByClassName("order");
    for (let i = 0; i < order.length; i++) {
        orders.removeChild(order[i]);
    }
}*/

