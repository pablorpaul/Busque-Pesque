const Funcionario = require('../models/funcionario')

class RepositorioFuncionario {
    
    async PegarUmFuncionario( id, transaction) {
        try {
            const funcionario = await Funcionario.findOne({
                where: { id },
                transaction
            });
    
            if (!funcionario) {
                throw new Error('Funcionario não encontrado')
            }
            return funcionario
        }catch (error) {
            console.log('Erro no repositorio', error)
            res.status(500).json({ message: "Erro ao listar funcionario" })
        }
    }
    async PegarTodosFuncionario() {
        return Funcionario.findAll()
    }

    async AddFuncionario(funcionario, transaction) {
        const result = await Funcionario.create({...funcionario}, { transaction })

        return result
    }

    async UpdateFuncionario(id, funcionario) {
        await Funcionario.update(funcionario, {
            where: {
                id
            }
        })
        return Funcionario.findOne({
            where: { id }
        })
    }

    async DeletarFuncionario(id) {
        return Funcionario.destroy({
            where: { id }
        });
    }
}
module.exports = RepositorioFuncionario