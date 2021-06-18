export default function SearchApi(pokeName){

//    const api = `https://pokeapi.co/api/v2/pokemon/${pokeName}`

    return fetch('/api/PokeApi',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify({pokeName})
    })
    .then(res => res.json())
    .then(respuesta =>{
        //console.log(respuesta);
        return respuesta
    })
}