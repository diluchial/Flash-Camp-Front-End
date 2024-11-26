//JSON = JavaScript Object Notation

// funcion que nos permite consumir un serivicio en la nube, consumir un appi, mostrarla en el front

//consumir api de pokemon

function pokemonData() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
        //Transformamos el objeto JSON en objeto literal (JS)
        .then(function(response){
            return response.json();

        })

        //Nos apoderamos del objeto literal que preiamente fue transformado y lo mostramos https://www.linkedin.com/in/silvanoelia/
        .then(function(data){
            console.log(data.results[18].name);
        })
}

pokemonData();