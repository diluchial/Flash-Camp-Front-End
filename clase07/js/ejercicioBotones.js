const botonesCambiar = document.querySelectorAll(".btnCambiar");

botonesCambiar.forEach(boton => {
    boton.addEventListener('click',function(){
        // Cambiare el texto del botón

        boton.innerText = "Botón cambiado";

        //Agregar el estilo de la clase que està en el archivo style.css

        boton.classList.add("cambiar");
    });
});

//for(let boton=0){}

