// Módulos
const express = require('express')

// Configurações
const app = express()
const PORT = 8081


app.listen(PORT, ()=>{
    console.log("Servidor Online!")
})