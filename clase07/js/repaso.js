// Ejercicio 1: Mostrar la suma de los números que irán desde el 1 hasta el 5 inclusive. Se deberá mostrar el resultado final de la suma.

function sumarNumerosEntreSi(){

    let sumandoNumeros = 0;

    for(let i=1; i<=5; i++){
        sumandoNumeros = sumandoNumeros+i;
        //1ra veulta del bucle: sumandoNumeros = 0+1 = 1
        //1ra veulta del bucle:sumandoNumeros = 1+2 = 3
        //1ra veulta del bucle: sumandoNumeros = 3+3 = 6 
        //4ra vuelta del bucle: sumando Numeros = 6+4 = 10
        //5ta vuelta del bucle : sumando Numeros = 10+5 = 15

    } console.log(`el resultado de la suma entre los numeros 1 al 5 inclusive  es: ${sumandoNumeros}`);

}

//Ejercicio crear una funciòn que permita sacar el 10% de un numero dado

function calcularPorcentaje(numero){
    const porcentaje = 0.1;
    const resultado = porcentaje*numero;
    console.log(resultado);
    return resultado;
}
calcularPorcentaje(100);

//tomando el resultado de la funciòn calcularPorcentaje, deberàs multiplicar a dos y mostrar el resulado del mismo.

const duplicar = calcularPorcentaje(100)*2;
console.log(duplicar);
