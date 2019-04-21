function createOrder() {
    sendHttpRequest();
}

function sendHttpRequest() {
    let json = createJson();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/orders", true);
    xhr.send(json);
    let response = json.parse(xhr.responseText);
    addOrder(response);
}

function createJson() {
    let json = {};
    json.numberRoute = document.getElementById("number_route").value;
    json.price = document.getElementById("price").value;
    json.description = document.getElementById("description").value;
    return json.stringify();
}
