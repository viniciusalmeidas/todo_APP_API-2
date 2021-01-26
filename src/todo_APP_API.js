const express = require('express');
const bodyParser = require('body-parser');
const ControllerUsuario = require("./controllers/usuario/usuario-controller");
const ControllerTarefas = require("./controllers/tarefas/tarefa-controller");
const bd = require('./infra/sqlite-db')

const port = 8080;

const app = express();

app.use(bodyParser.json());

ControllerTarefas(app,bd);
ControllerUsuario(app,bd);

app.listen(port, () => {
    console.log(`Tudo pronto. Testar em localhost:${port}`)
});