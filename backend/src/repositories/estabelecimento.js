const Estabelecimento = require('../models/estabelecimento')

class RepositorioEstabelecimento {
    
    async PegarUmEstabelecimento( id, transaction) {
        try {
            const estabelecimento = await Estabelecimento.findOne({
                where: { id },
                transaction
            });
    
            if (!estabelecimento) {
                throw new Error('estabelecimento não encontrado')
            }
            return estabelecimento
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do Estabelecimento" })
        }
    }
    async PegarTodosEstabelecimento() {
        return Estabelecimento.findAll()
    }

    async AddEstabelecimento(estabelecimento, transaction) {
        const result = await Estabelecimento.create(estabelecimento, transaction )

        return result
    }

    async UpdateEstabelecimento(id, estabelecimento) {
        await Estabelecimento.update(estabelecimento, {
            where: {
                id
            }
        })
        return Estabelecimento.findOne({
            where: { id }
        })
    }

    async DeletarEstabelecimento(id) {
        return Estabelecimento.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioEstabelecimento