const ServicoFuncionario = require('../services/funcionario')
const servico = new ServicoFuncionario()


class ControllerFuncionario{
    async PegarUmFuncionario(req, res){
        try {
            const result = await servico.PegarUmFuncionario(req.params.id)
            res.status(200).json({ 
                Funcionario: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um funcionario" })
        }
    }
    async PegarTodosFuncionario(_, res){
        try {
            const result = await servico.PegarTodosFuncionario()
            res.status(200).json({ 
                Funcionario: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os funcionarios" })
        }
    }
    async AddFuncionario(req, res){
        try {
            const { funcionario } = req.body
            const funcionario_result = await servico.AddFuncionario(funcionario)
    
            res.status(200).json({ 
                Funcionario: funcionario_result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar funcionario" })
        }
    }
    async UpdateFuncionario(req, res){
        try {
            const result = await servico.UpdateFuncionario(req.params.id, req.body.funcionario)
            res.status(200).json({ 
                Funcionario: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar funcionario" })
        }
    }
    async DeletarFuncionario(req, res){
        try {
            servico.DeletarFuncionario(req.params.id)
            res.status(200).json({ 
                message: "Funcionario deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar funcionario" })
        }
    }
}
module.exports = ControllerFuncionario