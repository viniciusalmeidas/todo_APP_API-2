const Tarefas = require("../Models/tarefa-model")

module.exports = (app, bd) => {
    app.get('/tarefas', (req, res)=>{

        res.send(bd.tarefas);
    });

    app.get('/usuarios/:id', (req, res) => {
        for(let tarefa of bd.tarefas) {
          if (tarefa.id == req.params.id){
            res.send(tarefa);
          }
        }
        res.send("tarefa não encontrada!");
      });

      

    app.post("/tarefas", (req, res)=>{
        const task = new Tarefas(req.body.id, req.body.titulo, req.body.mensagem, req.body.status, req.body.data);

        bd.tarefas.push(task);

        res.send("Tarefinha colocada")
    })

}