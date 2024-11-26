const botonInicia = document.getElementById("iniciar");
botonInicia.addEventListener('click', function(){
    botonInicia.innerText = "Cerrar Sesión";
})

const megusta = document.getElementById("megusta");
megusta.addEventListener('click', function(){
    alert("me gusto");
});

const agregarDefinicion = document.getElementById("agregar");
agregarDefinicion.addEventListener('click', function(){
    agregarDefinicion.style.display = "none";
});