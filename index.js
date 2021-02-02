var elements = document.getElementsByTagName("body");
var body = elements[0];

//body.className = "background-red";

var colorClasses = ["background-red", "background-green", "background-blue", "background-pink"];

var cambiarColor = function () {
    var colorIndex = Math.floor(Math.random() * 4);
    var selectedColorClass = colorClasses[colorIndex];
    body.className = selectedColorClass;

};

cambiarColor();

// cambiar al dar click boton
var botonCambiar = document.getElementById("boton_cambiar");
botonCambiar.onclick = cambiarColor;

// cambiar cada x tiempo

setInterval(cambiarColor, 1000); // milisegundos

