const ModelUsuario = require('../../models/usuarios/usuario');
module.exports = (app,bd) => {
    app.get('/usuarios', (req, res) => {
        bd.all("SELECT * FROM USUARIOS;", (err, rows) =>
        {
            if (err)
            {
                throw new Error (`Erro ao rodar consulta : ${err}`)
            }
            else 
            {
                res.send(rows)
            }
        })
        
    })

    app.get('/usuarios/:email',(req,res) =>{
        for (let usr of bd.usuariosBD)
        {
            if(usr.email==req.params.email)
            {
                res.send(usr)
            }   
        }
        res.send('Usuário não encontrado')
    })

    app.post('/usuarios', (req, res) => {
        const usr = new ModelUsuario(req.body.nome,req.body.email,req.body.senha);
        bd.usuariosBD.push(usr);
        res.send('usuario adicionado')
    })
    
    app.post('/usuarios/bancodedados/:id',(req,res) =>
    {
        for (i=0;i<req.params.id;i++){
            const usr = new ModelUsuario(`userName ${i}`,`UserEmail_${i}@hotmail.com`,`userPassword_${i}`)
            bd.usuariosBD.push(usr)
        }
        res.send('banco criado')
    })

    app.delete('/usuarios/:email', (req,res) => {
        for (i=0;i<bd.usuariosBD.length;i++)
        {
            if(bd.usuariosBD[i].email===req.params.email)
            {
                bd.usuariosBD.splice(i,1)
                res.send('Usuário deletado') 
            }  
            
        }
        res.send('Usuário não encontrado')
    })
    
    app.put('/usuarios/:email', (req,res) => {
        for (let usr of bd.usuariosBD)
        {
            if(usr.email==req.params.email)
            {
                usr.nome = req.body.nome
                usr.senha = req.body.senha
                res.send(`Registro: ${req.params.email} atualizado!`) 
            }  
            
        }
        res.send('Usuário não encontrado')
    })
}