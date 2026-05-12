const http = require("http")

let server = http.createServer((red, res)=>{

    console.log("URL", red.url)
    console.log("METHOD", red.method)

    res.end("Ok")

})

server.listen(3000, "127.0.0.1", ()=>{

    console.log("Servidor rodando!")

})
