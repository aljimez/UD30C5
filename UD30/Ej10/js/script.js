
let word = "La ruta nos aporto otro paso natural";
function palindromo(word) {
    if (word == word.reverse()) {
        console.log("el texto introducido se trata de un palindromo");
    } else {
        console.log("el texto introducido no se trata de un palindromo");
    }
}
