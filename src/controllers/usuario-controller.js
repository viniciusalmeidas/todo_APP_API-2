const Usuarios = require("../Models/usuario-model")

module.exports = (app, bd) => {

    //req (requisição)
    //app.get recebe a rota e um callback
    app.get('/usuarios', (req, res)=> {
      //função callback recebe a requisição e a resposta

        res.send(bd.usuarios); // imprimir algo quando carregar o get
    });

    app.get('/usuarios/:email', (req, res) => {
        for(let usuario of bd.usuarios) {
          if (usuario.email == req.params.email){
            res.send(usuario);
          }
        }
        res.send("Usuario não encontrado!");
      });

      
    app.post("/usuarios",(req, res)=>{

        
        const usr = new Usuarios(req.body.nome, req.body.email, req.body.senha);
        bd.usuarios.push(usr);
        
        res.send("Será que vem ai?")


    })

    app.delete('/usuarios/:email', (req, res) => {
    
        let bancoFiltrado = [];
        for(let i = 0; i < bd.usuarios.length; i++) {
          if(req.params.email != bd.usuarios[i]._email) {
            bancoFiltrado.push(bd.usuarios[i]);
          }
        }
        if(bd.usuarios.length != bancoFiltrado.length) {
          bd.usuarios = bancoFiltrado;
          res.send(`Usuario ${req.params.email} foi removido!`)
        } else {
          res.send(`Usuario ${req.params.email} encontrado!`);
        }
      })

      app.put("/usuarios/:email", (req, res) =>{

        for (const user of bd.usuarios) {
          if (req.params.email == user.email) {
            user.email = req.body.email
          }
        }

        res.send("Atualização Ok")
      })
    
}