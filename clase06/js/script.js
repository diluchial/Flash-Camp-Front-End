
//1ra expresión
const x = 35;
const y = "a";

y === "b" || x >= 32;
//false o true
// true

//2da expresión
const a = 5;
const b = 8;

(a == "5" || a ===b) && !(b!=8 && a <= b)
//false

// Ejercicio de condicionales: preguntarle al usuario què hora es actualmente en su país e informarle cuales son los turnos del día en base a dicho horario.

const hora = +prompt("Qué hora es actualmente en tu país?");

if (hora <= 24) {
    if (hora >= 6 && hora <13) {
        console.log("Estás en el turno mañana");  
            }
    else if (hora >= 13 && hora < 20){
        console.log("Estás en el turno tarde");
    }

    else {
        console.log("Estàs en el turno noche");
    }
} else {
    console.log("Dato no válido, volvé a ingresar un horario que sea correcto");
}
