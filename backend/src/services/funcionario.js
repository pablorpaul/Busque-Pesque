const RepositorioFuncionario = require('../repositories/funcionario')


const repositorio = new RepositorioFuncionario

class ServicoFuncionario {
    
    VerficarFuncionario(funcionario) {
        if(!funcionario){
            throw new Error('Não foi enviada o funcionario para adicionar');
        } else if(!funcionario.nome){
            throw new Error('Não foi enviado o nome do funcionario');
        } else if(!funcionario.telefone){
            throw new Error('Não foi enviado o telefone do funcionario');
        }
    }

    async PegarUmFuncionario( id, transaction ) {
        return repositorio.PegarUmFuncionario( id, transaction )
    }

    async PegarTodosFuncionario() {
        return repositorio.PegarTodosFuncionario()
    }

    async AddFuncionario(funcionario, transaction) {
        this.VerficarFuncionario(funcionario)

        return repositorio.AddFuncionario(funcionario, transaction);
    }

    async UpdateFuncionario(id, funcionario) {
        if(!id) {
            throw new Error('Não foi enviada o identificador do funcionario para alterar');
        } 
        this.VerficarFuncionario(funcionario)

        return repositorio.UpdateFuncionario(id, funcionario);
    }

    async DeletarFuncionario(id) {
        return repositorio.DeletarFuncionario(id);
    }


}
module.exports = ServicoFuncionario