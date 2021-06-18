const fetch = require('node-fetch')

//mensaje en json para la respuesta del error
const HandleError = {
    status: 404,
    message: 'Debes escribir bien el nombre del Pokemon para encontrarlo'
}

///realiza la peticion al servidor y maneja el error si ni es encontrado
function Peticion(req, res, pokemon){

    console.log(pokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => response.json())
    .then(Pokedata => res.json({
        Pokedata
    }))
    .catch(err => res.json({
        HandleError
    }))
}

module.exports = {Peticion}