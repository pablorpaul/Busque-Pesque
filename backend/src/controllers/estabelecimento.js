const ServicoEstabelecimento = require('../services/estabelecimento')
const servico = new ServicoEstabelecimento()


class ControllerEstabelecimento{
    async PegarUmEstabelecimento(req, res){
        try {
            const result = await servico.PegarUmEstabelecimento(req.params.id)
            res.status(200).json({ 
                Estabelecimento: result 
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao pegar um estabelecimento" })
        }
    }
    async PegarTodosEstabelecimento(_, res){
        try {
            const result = await servico.PegarTodosEstabelecimento()
            res.status(200).json({ 
                Estabelecimento: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao listar todos os estabelecimentos" })
        }
    }
    async AddEstabelecimento(req, res){
        try {
            const { estabelecimento } = req.body
            const estabelecimento_result = await servico.AddEstabelecimento(estabelecimento)
    
            res.status(200).json({ 
                Estabelecimento: estabelecimento_result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao adicionar estabelecimento" })
        }
    }
    async UpdateEstabelecimento(req, res){
        try {
            const result = await servico.UpdateEstabelecimento(req.params.id, req.body.estabelecimento)
            res.status(200).json({ 
                Estabelecimento: result
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao alterar estabelecimento" })
        }
    }
    async DeletarEstabelecimento(req, res){
        try {
            servico.DeletarEstabelecimento(req.params.id)
            res.status(200).json({ 
                message: "Estabelecimento deletado com sucesso",
            })
        } catch (error) {
            console.log('Erro no controller', error)
            res.status(500).json({ message: "Erro ao deletar estabelecimento" })
        }
    }
}
module.exports = ControllerEstabelecimento