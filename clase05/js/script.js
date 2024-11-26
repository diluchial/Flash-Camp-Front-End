// esto es un comentario
/*Esto es un comentario 
multilínea
*/

//VARIABLES: Es el contender de un valor 
//ES5 /EcmaScript 5)
var producto = "Tablet";
console.log(producto);
var producto = "Mouse";+
console.log(producto)

//ES6: Let y const
//let
let nombreUsuario = "Pepe";
console.log(nombreUsuario);
nombreUsuario = "Romina"; //redefine variable nuevamente
console.log(nombreUsuario);


//const
const numeroTelefonico = 123456789;
console.log(numeroTelefonico);

// TIPOS DE DATO: String,number, boolean
//OPERADORES DE COMPARACIÓN
//OPERADORES LÓGICOS: and (&&), or (), not(!)
//OPERADORES ARITMÉTICOS

//Ejercicio: detectar si un numero es par o impar 

const numero = "jlkjkj";
if(numero % 2 === 0){
    console.log("El numero ingresado es par");
} else {
    console.log("El numero ingresado es impar");
}

//Ejerciciov2: par o impar 

if(typeof numero != "number"){
    console.log("No reconozco");
} else if(numero % 2 === 0){
    console.log("EL nuemro ingresado es par");
}else {
    console.log("El numero ingresado es impar");
}



