
let letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

let dni = prompt("Introduce el dni (sin la letra)");

let letra = prompt("Introduce la letra del dni");
if (dni < 0 && dni > 99999999) {

    alert("El numero introducido no es válido");
} else {

    let res = dni % 23;
    alert("La letra es " + letras[res]);
    if (letra == letras[res]) {
        console.log("La letra seleccionada es la correcta");
    } else {
        console.log("La letra seleccionada no es la correcta");
    }
}