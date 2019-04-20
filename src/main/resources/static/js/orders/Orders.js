
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
    // clearOrders();
    for (let i = 0; i < orders.length; i++) {
        addOrder(orders[i]);
    }
}

function addOrder(order) {
    let orders = document.getElementById("orders");
    let article = createArticle(order);
    orders.appendChild(article);
    let header = createHeader();
    article.appendChild(header);
    let numberRoute = createNumberRoute(order);
    header.appendChild(numberRoute);
    let price = createPrice(order);
    header.appendChild(price);
    let button = createButton(order);
    header.appendChild(button);
}

function createArticle(order) {
    let article = document.createElement("article");
    article.setAttribute("id", order.id);
    article.setAttribute("class", "order");
    return article;
}

function createHeader() {
    return document.createElement("header");
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

