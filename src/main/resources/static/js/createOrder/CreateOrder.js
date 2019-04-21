function sendHttpRequest() {
    let json = createJson();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/orders",false);
    console.log(json);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(json);
    console.log("sosisuka");
    window.location = "http://localhost:8080/main/personal";
}

function createJson() {
    let json = {};
    json.numberRoute = document.getElementById("number_route").value;
    json.description = document.getElementById("description").value;
    json.price = parseInt(document.getElementById("price").value);
    let date = new Date();
    json.date = date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds();
    json.numberAuto = document.getElementById("number_bus").value;
    return JSON.stringify(json);
}
