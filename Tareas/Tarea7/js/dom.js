const botones = document.querySelectorAll(".meGusta");

botones.forEach(boton => {
    boton.addEventListener('click',function(){
        // Cambiare el texto del botón
        const currentValue = boton.value;
        const acc = Number(currentValue)+ 1;
        boton.value = acc;
        console.log(acc);
        boton.innerText = ` ${acc} like(s)`;

        //Agregar el estilo de la clase que està en el archivo style.css

        boton.classList.add("cambiar");
    });
});

//for(let boton=0){}
