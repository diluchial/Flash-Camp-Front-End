// DOM  = Document Objetc Model

// Seleccionar elementos. Nos va a devolver el primer elemento HTML que encuentre en base a su tipo

console.log(document.queryselector("p"));
console.log(document.queryselector("#texto2"));
console.log(document.queryselector(".textos"));

//seleccionar màs de un elemento a la vez
console.log(document.querySelectorAll("p"));

//acceder al elemento en base  a su clase de forma  mas especificia
console.log(document.getElementsByClassName("textos"));

//acceder al elemento en base al ID
console.log(document.getElementById("texto3"))

//aplicar estilos
//1er manera es crear una variable donde le pasaremos estilos al elemento a través de la misma
const parrafo1 = document.getElementById("texto1");
parrafo1.style.color="red";
parrafo1.style.backgroundColor="black"
parrafo1.style.padding="10px";

//2da manera es aplicar estilos mediante una clase ya creada previamente en el archivo css
const parrafo2 = document.getElementbyID("texto");
parrafo2.classlist.add(estiloParrafo2);

//remover  una clase
//parrafo2.classList.remove("estiloParrafo2");

//Eventos: son funciones que se estarán ejecutando en el documento html. Mayormanete  se ejecutan mediante la interacción del usuario:

const btnEnviar = document.getElementbyID("botonEnviar");
btnEnviar.addEventListener('click', function(){
    alert("tus datos ya se enviaron correctamente");
});



