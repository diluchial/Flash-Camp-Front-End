const botonDonar = document.getElementById("donar");
botonDonar.addEventListener('click', function(){
    alert("Gracias por tu donación!");
});

const botonAdoptar = document.getElementById("adoptar");
// console.log(botonAdoptar);
botonAdoptar.addEventListener('click', function(){
    botonAdoptar.innerText = "Adoptado";
})

const botonAlamo = document.getElementById("alamo");
botonAlamo.addEventListener('click', function(){
    botonAlamo.innerText = "Adoptado";
})

const botonFresno = document.getElementById("fresno");
botonFresno.addEventListener('click', function(){
    botonFresno.innerText = "Adoptado";
})

const botonJacaranda = document.getElementById("jacaranda");
botonJacaranda.addEventListener('click', function(){
    botonJacaranda.innerText = "Adoptado";
})

const botonPino = document.getElementById("pino");
botonPino.addEventListener('click', function(){
    botonPino.innerText = "Adoptado";
})

const listaArboles = document.getElementById('listaArboles');
console.log(listaArboles);
const mostrarDiv = document.getElementById('mostrar');
console.log(mostrarDiv);
listaArboles.addEventListener('change', function () {
    const textoSeleccionado = listaArboles.options[listaArboles.selectedIndex].text;
    mostrarDiv.innerText = `Mostrando: ${textoSeleccionado}`;
});


