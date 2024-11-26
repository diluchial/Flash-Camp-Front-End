//Objetos  se usan {} en los array []
//en los objetos se guardan valores , propiedades (lo mismo que Key)

const auto = {
    marca: "Ford",
    modelo: "Ranger",
    color: "negro",
    anio: 2024
}

console.log(auto);
//para llamar la propiedad se hace a través de dot notation
console.log(auto.marca);

//iteramos el objeto auto con el bucle for in
for (const propiedadAuto in auto){
    console.log(auto[propiedadAuto]);
}

