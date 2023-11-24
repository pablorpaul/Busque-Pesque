const ServicoUsuario = require('../services/usuario')
const servico = new ServicoUsuario()


class ControllerUsuario{
    async PegarUmUsuario(req, res){
        try {
            const result = await servico.PegarUmUsuario(req.params.id)
            res.status(200).json({ 
                Usuario: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um nome" })
        }
    }
    async PegarTodosUsuario(_, res){
        try {
            const result = await servico.PegarTodosUsuario()
            res.status(200).json({ 
                Usuarios: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os nomes" })
        }
    }
    async AddUsuario(req, res){
        try {
            if(req.session.permissao != 1){
                throw new Error("Permissão negada")
            }
            const { usuario } = req.body
            const user = await servico.AdicionarUsuario(usuario)
    
            res.status(200).json({ 
                Usuario: user
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar" })
        }
    }
    async UpdateUsuario(req, res){
        try {
            const result = await servico.UpdateUsuario(req.params.id, req.body.Usuario)
            res.status(200).json({ 
                Usuario: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar" })
        }
    }
    async DeletarUsuario(req, res){
        try {
            servico.DeletarUsuario(req.params.id)
            res.status(200).json({ 
                message: "Usuario deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar" })
        }
    }
}
module.exports = ControllerUsuario