const Funcionarios = require('../models/funcionarios')

class RepositorioFuncionarios {
    
    async PegarUmFuncionario( id, transaction) {
        try {
            const Funcionarios = await Funcionarios.findOne({
                where: { id },
                transaction
            });
    
            if (!Funcionarios) {
                throw new Error('Funcionarios não encontrado')
            }
            return Funcionarios
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar o nome do Funcionarios" })
        }
    }
    async PegarTodosFuncionarios() {
        return Funcionarios.findAll()
    }

    async AddFuncionario(Funcionarios, userid, transaction) {
        const result = await Funcionarios.create({...Funcionarios, usuarioId: userid}, { transaction })

        return result
    }

    async UpdateFuncionario(id, Funcionarios) {
        await Funcionarios.update(Funcionarios, {
            where: {
                id
            }
        })
        return Funcionarios.findOne({
            where: { id }
        })
    }

    async DeleteFuncionario(id) {
        return Funcionarios.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioFuncionarios