const RepositorioUsuario = require('../repositories/usuario')


const repositorio = new RepositorioUsuario

class ServicoUsuario {
    async PegarUmUsuario( id, transaction ) {
        return repositorio.PegarUmUsuario( id, transaction )
    }

    async PegarTodosUsuario() {
        return repositorio.PegarTodosUsuario()
    }
    async AdicionarUsuario(usuario, permissao){
        
        if(!usuario.email) {
            throw new Error("Favor preencher o email.")
        } else if(!usuario.senha) {
            throw new Error("Favor preencher o senha.")
        } else if(permissao) {
            throw new Error("Favor preencher o permissao.")
        }
  
        return repositorio.AdicionarUsuario({...usuario, permissao: permissao})
    }
    async UpdateUsuario(id, Usuario) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do Usuario para alterar');
        } 
        this.VerficarUsuario(Usuario)

        return repositorio.UpdateUsuario(id, Usuario);
    }

    async DeletarUsuario(id) {
        return repositorio.DeleteUsuario(id);
    }
}
module.exports = ServicoUsuario