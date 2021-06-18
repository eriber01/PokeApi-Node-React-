const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
//settings
const PORT =  process.env.PORT || 3001

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use('/api/PokeApi', require('./routes/apiRoutes'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('cliente/app-cliente/build'))
    app.get("*", (req, res)=>{
        res.sendFile(path.resolve(__dirname, 'cliente/app-cliente/', 'build', 'index.html'))
    })
}

app.listen(PORT, ()=> console.log(`hola desde el puerto ${PORT}`))