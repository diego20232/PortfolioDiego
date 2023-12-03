function openNav () {
    var x = document.getElementById("content");

    if (x.className === "content") {
        x.className += " menujs";
        document.getElementById("menu").innerHTML = "&Cross;";
    } else {
        x.className = "content";
        document.getElementById("menu").innerHTML = "&#9776;";
    }
}