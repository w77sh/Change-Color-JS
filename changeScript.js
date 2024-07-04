function changeStyle() {
    let bodyColor = document.getElementById("bodyColor");
    let backgroundColor = document.getElementById("backgroundColor").value;
    let textColor = document.getElementById("textColor").value;
    bodyColor.style.background = backgroundColor;
    bodyColor.style.color = textColor;

}