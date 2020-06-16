const express = require("express");
var app = express();

app.get("/", function(req, res){
    res.sendfile(__dirname+ "/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendfile(__dirname+ "/html/sobre.html");
})

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog");
})

app.get("/ola/:nome", function( req, res){
    res.send("<h1>ola"+req.params.nome + "</h1>");
})

app.listen(8081, function(){
    console.log("Servidor rodando")
});