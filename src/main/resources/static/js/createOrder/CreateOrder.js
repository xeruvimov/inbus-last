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
    json.description = document.getElementById("description").value;
    json.price = document.getElementById("price").value;
    let date = new Date.now();
    json.date = date.hour + ":" + date.minute + ":" + date.second;
    json.numberAuto = document.getElementById("number_auto").value;
    return JSON.stringify(json);
}
