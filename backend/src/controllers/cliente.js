const ServicoCliente = require('../services/cliente')
const servico = new ServicoCliente()

class ControllerCliente{
    
    async PegarUmCliente(req, res){
        try {
            const result = await servico.PegarUmCliente(req.params.id)
            res.status(200).json({ 
                Cliente: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }
    async PegarTodosCliente(_, res){
        try {
            const result = await servico.PegarTodosCliente()
            res.status(200).json({ 
                Clientes: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    async AddCliente(req, res){
        try {
            if(req.session.permissao != 1){
                throw new Error("Permissão negada")
            }
            const { usuario } = req.body
            const user = await servico.AdicionarUsuario(usuario)
            const result = await servico.AddCliente(req.body.cliente, user.id)
            res.status(200).json({ 
                Cliente: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateCliente(req, res){
        try {
            const result = await servico.UpdateCliente(req.params.id, req.body.cliente)
            res.status(200).json({ 
                Cliente: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeletarCliente(req, res){
        try {
            servico.DeletarCliente(req.params.id)
            res.status(200).json({ 
                message: "Cliente deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerCliente