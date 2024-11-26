//funcion para mostrar en el modal

function mostrarModal(){

    const   superModal = document.getElementById("superposicionModal");
    superModal.style.display="block";

};

//funcion para cerrar el modal

function ocultarModal(){
    const superModal = document.getElementById("superposicionModal");
    superModal.style.display="none";
}

//Añadir eventos a los botones de abrir y cerrar modal
const btnAbrir = document.getElementById("abrirModalBtn"); btnAbrir.addEventListener("click", mostrarModal);

const btnCerrar = document.getElementById("cerrarModalBtn"); btnCerrar.addEventListener("click", ocultarModal);