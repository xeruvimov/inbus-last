var isOpen = [false, false, false, false];

function addDescription(id) {
    if (isOpen[id]) {
        let order = document.getElementById(id);
        let div = order.getElementsByClassName("description").item(0);
        console.log(div);
        order.removeChild(div);
        isOpen[id] = false;
    } else {
        let order = document.getElementById(id);
        let description = createDescription();
        order.appendChild(description);
        isOpen[id] = true;
    }
}

function createDescription() {
    let div = document.createElement("div");
    div.setAttribute("class", "description");
    let h4 = document.createElement("h4");
    h4.setAttribute("align", "center");
    h4.textContent = "Описание";
    div.appendChild(h4);
    p = document.createElement("p");
    p.textContent = "test";
    div.appendChild(p);
    let img = document.createElement("img");
    img.setAttribute("src", "img/gps_label.png");
    img.style.height = "200px";
    img.style.width = "900px";
    img.style.margin = "25px 50px 25px 50px";
    div.appendChild(img);
    return div;
}