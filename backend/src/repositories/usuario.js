const Usuario = require("../models/usuario")
const bcrypt = require('bcrypt')

class RepositorioUsuario {
    async PegarUmPorEmail(email){
        return Usuario.findOne({
            where: {
                email
            }
        })
    }

    async AdicionarUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.create({ ...usuario, senha: hashsenha})
    }

    async UpdateUsuario(usuario){
        const hashsenha = await bcrypt.hash(usuario.senha, 10)

        return Usuario.update({ ...usuario, senha: hashsenha})

    }

    async DeletarUsuario(id){

        return Usuario.destroy({
            where: {
                id
            }
        })
    }
}
module.exports = RepositorioUsuario