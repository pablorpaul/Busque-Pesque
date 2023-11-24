const RepositorioLogin = require('../repositories/login')

const repositorio = new RepositorioLogin

class ServicoLogin{
    async PegarUmPorEmail(email){
        if(!email.trim()) {
          throw new Error("Preencha o email")
        }
        return repositorio.PegarUmPorEmail(email)
    }
}
module.exports = ServicoLogin