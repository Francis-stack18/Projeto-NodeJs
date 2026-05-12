const express = require("express")
//const { json } = require("stream/consumers")
let app = express()
app.get("/", (red, res)=>{

    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>Olá</h1>")

})

app.get("/users", (req, res)=>{

    res.statusCode = 200
            res.setHeader("Content-Type", "application/json")
            res.json({

                users:[{
                    name:"Hcode",
                    email: "contato@hcode.com",
                    id: 2
                }]

            })

})
app.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando!")

})