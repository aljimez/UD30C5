
let valores = [true, 5, false, "hola", "adios", 2];
//Evaluación de string más largo
//1
if (valores[4] > valores[5]) {
    console.log("hola es ayor que adios");
} else {
    console.log("adios es mayor que hola")
}
//2
if(valores[1] == true){
console.log("La sentencia dentro de array es true")
}else if(valores[3] == false){

    console.log("La sentencia dentro del array es false")
}
//3

let ress = valores[2] + valores[5];
let rest = valores[2]-valores[5];
let resdv = valores[2]/valores[5];
let resto = valores[2]%valores[5];
let resmu = valores[2]*valores[5];
console.log (ress,resdv,resmu,rest,resto);