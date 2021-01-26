const ModelTarefa = require('../../models/tarefas/tarefa'); 
module.exports = (app,bd) => {
    app.get('/tarefas', (req, res) => {
        res.send(bd.tarefasBD)
    })
    
    app.post('/tarefas', (req, res) => {
        const trf = new ModelTarefa(req.body.titulo,req.body.descricao,req.body.status,req.body.dataCriacao);
        bd.tarefasBD.push(trf)
        console.log(bd)
        res.send('tarefa Criada')
    })
}