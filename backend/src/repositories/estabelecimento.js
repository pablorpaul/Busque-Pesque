const Estabelecimento = require('../models/estabelecimento')

class RepositorioEstabelecimento {
    
    async PegarUmEstabelecimento( id, transaction) {
        try {
            const estabelecimento = await Estabelecimento.findOne({
                where: { id },
                transaction
            });
    
            if (!estabelecimento) {
                throw new Error('estabelecimento não encontrado não encontrado')
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

    async AddEstabelecimento(Estabelecimento, transaction) {
        const result = await Estabelecimento.create(Estabelecimento, transaction )

        return result
    }

    async UpdateEstabelecimento(id, Estabelecimento) {
        await Estabelecimento.update(Estabelecimento, {
            where: {
                id
            }
        })
        return Estabelecimento.findOne({
            where: { id }
        })
    }

    async DeleteEstabelecimento(id) {
        return Estabelecimento.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioEstabelecimento