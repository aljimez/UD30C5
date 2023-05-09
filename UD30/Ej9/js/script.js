
cadena = "Ejemplo de CaDeNa";
function checkLett(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está escrita en mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está escrita en minúsculas.");
    } else {
        console.log("La cadena está escrita en combinación de mayúsculas y minúsculas.");
    }
}