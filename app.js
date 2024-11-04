const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000

app.get("/", (req,res)=>{
    res.send("<h1>Tudo Funcionando/h1")
})

app.listen(porta, ()=>{
    console.log("Servidor executando na porta", porta)
})