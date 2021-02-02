//Instanciamentos 
const express = require("express");
const bodyParser = require("body-parser");

const app = express(); //tem método USE 
const port = 8080;
const bd = require("./infras/bd")

//colocando o parser pra rodar 
app.use(bodyParser.json());
//Recbe tudo em binário, o bodyparser transforma o binário em json
const usuarioController = require("./Controller/usuario-controller.js");
const tarefaController = require('./Controller/tarefas-controller');
usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, ()=> {
    console.log("exemplo blablabla")
});
