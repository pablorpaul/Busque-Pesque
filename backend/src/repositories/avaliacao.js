const Avaliacao = require('../models/avaliacao')

class RepositorioAvaliacao {
    
    async PegarUmAvaliacao( id, transaction) {
        try {
            const avaliacao = await Avaliacao.findOne({
                where: { id },
                transaction
            });
    
            if (!avaliacao) {
                throw new Error('Avaliação não encontrado')
            }
            return avaliacao
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do avaliacao" })
        }
    }
    async PegarTodosAvaliacao() {
        return Avaliacao.findAll()
    }

    async AddAvaliacao(avaliacao, transaction) {
        const result = await avaliacao.create(avaliacao, transaction )

        return result
    }

    async UpdateAvaliacao(id, avaliacao) {
        await avaliacao.update(avaliacao, {
            where: {
                id
            }
        })
        return avaliacao.findOne({
            where: { id }
        })
    }

    async DeleteAvaliacao(id) {
        return Avaliacao.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioAvaliacao