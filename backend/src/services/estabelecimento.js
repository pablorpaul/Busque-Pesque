const RepositorioEstabelecimento = require('../repositories/estabelecimento')


const repositorio = new RepositorioEstabelecimento

class ServicoEstabelecimento {
    
    VerficarEstabelecimento(estabelecimento) {
        if(!estabelecimento){
            throw new Error('Não foi enviada o estabelecimento para adicionar');
        } else if(!estabelecimento.nome){
            throw new Error('Não foi enviado o nome do estabelecimento');
        } else if(!estabelecimento.telefone){
            throw new Error('Não foi enviado o telefone do estabelecimento');
        }
    }

    async PegarUmEstabelecimento( id, transaction ) {
        return repositorio.PegarUmEstabelecimento( id, transaction )
    }

    async PegarTodosEstabelecimento() {
        return repositorio.PegarTodosEstabelecimento()
    }

    async AddEstabelecimento(estabelecimento, userid, transaction) {
        this.VerficarEstabelecimento(estabelecimento)

        return repositorio.AddEstabelecimento(estabelecimento, userid, transaction);
    }

    async UpdateEstabelecimento(id, estabelecimento) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do estabelecimento para alterar');
        } 
        this.VerficarEstabelecimento(estabelecimento)

        return repositorio.UpdateEstabelecimento(id, estabelecimento);
    }

    async DeletarEstabelecimento(id) {
        return repositorio.DeletarEstabelecimento(id);
    }


}
module.exports = ServicoEstabelecimento