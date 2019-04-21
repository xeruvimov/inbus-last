var descriptions = [];
var isOpen = [];

function delOrder(id) {
    let xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://localhost:8080/orders/" + id,false);
    xhr.send();
    window.location = "http://localhost:8080/main/personal";
}

function getPersonalOrders() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/customer/personal",false);
    xhr.send();

    if (xhr.status == 200) {
        let order = JSON.parse(xhr.responseText);
        console.log(order);
        addPersonalOrder(order);
    }
}


function addPersonalOrder(order) {
    let orders = document.getElementById("personal_order");
    let newOrder = createPersonalOrder(order);
    orders.appendChild(newOrder);
    savePersonalDescription(order);
}

function createPersonalOrder(order) {
    let div = document.createElement("article");
    div.setAttribute("id", order.id);
    div.setAttribute("class", "order");
    let header = createPersonalHeader(order);
    div.appendChild(header);
    return div;
}

function createPersonalHeader(order) {
    let div = document.createElement("header");
    let information = createPersonalInformation(order);
    div.appendChild(information);
    let action = createPersonalAction(order);
    div.appendChild(action);
    // let button = createButton(order);
    // div.appendChild(button);
    return div;
}

function createPersonalInformation(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "information");
    let routePrice = createPersonalRoutePrice(order);
    div.appendChild(routePrice);
    let timeAndCarNumber = createPersonalTimeAndCarNumber(order);
    div.appendChild(timeAndCarNumber);
    return div;
}

function createPersonalRoutePrice(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "route_price");
    let numberRoute = createPersonalNumberRoute(order);
    div.appendChild(numberRoute);
    let price = createPersonalPrice(order);
    div.appendChild(price);
    return div;
}

function createPersonalNumberRoute(order) {
    let numberRoute = document.createElement("h4");
    numberRoute.textContent = order.numberRoute + " автобус";
    return numberRoute;
}

function createPersonalPrice(order) {
    let price = document.createElement("h4");
    price.textContent = order.price + " рублей";
    return price;
}

function createPersonalTimeAndCarNumber(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "time&car_number");
    let time = createPersonalTime(order);
    div.appendChild(time);
    let carNumber = createPersonalCarNumber(order);
    div.appendChild(carNumber);
    return div;
}

function createPersonalTime(order) {
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

function createPersonalCarNumber(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "car_number");
    let p = document.createElement("p");
    p.textContent = order.numberAuto;
    div.appendChild(p);
    return div;
}

function createPersonalAction(order) {
    let div = document.createElement("div");
    div.setAttribute("class", "action");
    let moreButton = createPersonalMoreButton(order);
    div.appendChild(moreButton);
    let bookmarkButton = createDeleteButton(order);
    div.appendChild(bookmarkButton);
    return div;
}

function createPersonalMoreButton(order) {
    let button = document.createElement("button");
    button.setAttribute("class", "more");
    button.setAttribute("onclick", "addPersonalDescription(" + order.id + ")");
    let p = createPersonalButtonText();
    button.appendChild(p);
    return button;
}

function createDeleteButton(order) {
    let button = document.createElement("button");
    button.setAttribute("class", "bookmark");
    button.setAttribute("onclick", "delOrder(" + order.id + ")");
    let p = document.createElement("p");
    p.textContent = "Удалить";
    button.appendChild(p);
    return button;
}

function createPersonalButtonText() {
    let p = document.createElement("p");
    p.textContent = "Подробнее";
    return p;
}

function savePersonalDescription(order) {
    descriptions[order.id] = order.description;
}

function addPersonalDescription(id) {
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
        let description = createPersonalDescription(descriptions[id]);
        order.appendChild(description);
        isOpen[id] = true;
    }
}

function createPersonalDescription(text) {
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