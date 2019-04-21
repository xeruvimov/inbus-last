var descriptions = [];
var isOpen = [];

function delBook() {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:8080/customer/booked/",false);
    xhr.send();

    if (xhr.status == 200) {
        let orders = JSON.parse(xhr.responseText);
        console.log(orders);
    }
    window.location = "http://localhost:8080/main/personal";
}

function getBookedOrders() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/customer/booked",false);
    xhr.send();

    if (xhr.status == 200) {
        let order = JSON.parse(xhr.responseText);
        console.log(order);
        addOrder(order);
    }
}

function addOrder(order) {
    let orders = document.getElementById("booked_order");
    let newOrder = createOrder(order);
    orders.appendChild(newOrder);
    saveDescription(order);
}

function createOrder(order) {
    let div = document.createElement("article");
    div.setAttribute("id", order.id);
    div.setAttribute("class", "order");
    let header = createHeader(order);
    div.appendChild(header);
    return div;
}

function createHeader(order) {
    let div = document.createElement("header");
    let information = createInformation(order);
    div.appendChild(information);
    let action = createAction(order);
    div.appendChild(action);
    // let button = createButton(order);
    // div.appendChild(button);
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
    numberRoute.textContent = order.numberRoute + " автобус";
    return numberRoute;
}

function createPrice(order) {
    let price = document.createElement("h4");
    price.textContent = order.price + " рублей";
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

function createAction(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "action");
    let moreButton = createMoreButton(order);
    div.appendChild(moreButton);
    let bookmarkButton = createBookmarkButton(order);
    div.appendChild(bookmarkButton);
    return div;
}

function createMoreButton(order) {
    let button = document.createElement("button");
    button.setAttribute("class", "more");
    button.setAttribute("onclick", "addDescription(" + order.id + ")");
    let p = createButtonText();
    button.appendChild(p);
    return button;
}

function createBookmarkButton(order) {
    let button = document.createElement("button");
    button.setAttribute("class", "bookmark");
    button.setAttribute("onclick", "delBook()");
    let p = document.createElement("p");
    p.textContent = "Отменить";
    button.appendChild(p);
    return button;
}

function createButtonText() {
    let p = document.createElement("p");
    p.textContent = "Подробнее";
    return p;
}

function saveDescription(order) {
    descriptions[order.id] = order.description;
}

function addDescription(id) {
    console.log(id);
    console.log(descriptions[id]);
    if (isOpen[id]) {
        let order = document.getElementById(id);
        let div = order.getElementsByClassName("description").item(0);
        console.log(div);
        order.removeChild(div);
        isOpen[id] = false;
    } else {
        let order = document.getElementById(id);
        let description = createDescription(descriptions[id]);
        order.appendChild(description);
        isOpen[id] = true;
    }
}

function createDescription(text) {
    let div = document.createElement("div");
    div.setAttribute("class", "description");
    let h4 = document.createElement("h4");
    h4.setAttribute("align", "center");
    h4.textContent = "Описание";
    div.appendChild(h4);
    p = document.createElement("p");
    p.textContent = text;
    div.appendChild(p);
    let img = document.createElement("img");
    img.setAttribute("src", "/img/gps_label.png");
    img.style.height = "200px";
    img.style.width = "900px";
    img.style.margin = "25px 50px 25px 50px";
    div.appendChild(img);
    return div;
}