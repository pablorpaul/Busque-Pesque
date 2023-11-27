const Cliente = require('../models/cliente')

class RepositorioCliente {
    
    async PegarUmCliente( id, transaction) {
        try {
            const cliente = await Cliente.findOne({
                where: { id },
                transaction
            });
    
            if (!cliente) {
                throw new Error('Cliente não encontrado')
            }
            return cliente
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do cliente" })
        }
    }
    async PegarTodosCliente() {
        return Cliente.findAll()
    }

    async AddCliente(cliente, userid, transaction) {
        const result = await Cliente.create({...cliente, usuarioId: userid}, { transaction })

        return result
    }

    async UpdateCliente(id, cliente) {
        await Cliente.update(cliente, {
            where: {
                id
            }
        })
        return Cliente.findOne({
            where: { id }
        })
    }

    async DeleteCliente(id) {
        return Cliente.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioCliente