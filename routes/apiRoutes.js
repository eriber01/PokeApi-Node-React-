const express = require('express')
const router = express.Router()

const PeticionFetch = require('../controller/PokeApi')

///ruta de prueva para el get
router.get('/', (req, res)=>{
    res.json({ status: "hola desde la api" })
    console.log(req.body.name);
})

//ruta donde el cliente hace la peticion
router.post('/', async(req, res)=>{
    const pokemon = await req.body.pokeName

    console.log(pokemon);
    
    //realiza la peticion al constructor
    await PeticionFetch.Peticion(req, res, pokemon)
})

module.exports = router