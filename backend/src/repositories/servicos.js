const Servico = require('../models/Servico')

class RepositorioServico {
    
    async PegarUmServico( id, transaction) {
        try {
            const servico = await Servico.findOne({
                where: { id },
                transaction
            });
    
            if (!servico) {
                throw new Error('Avaliação não encontrado')
            }
            return servico
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do Serviço" })
        }
    }
    async PegarTodosServico() {
        return Servico.findAll()
    }

    async AddServico(Servico, transaction) {
        const result = await Servico.create(Servico, transaction )

        return result
    }

    async UpdateServico(id, Servico) {
        await Servico.update(Servico, {
            where: {
                id
            }
        })
        return Servico.findOne({
            where: { id }
        })
    }

    async DeleteServico(id) {
        return Servico.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioServico