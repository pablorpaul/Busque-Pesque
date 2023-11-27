const ServicoUsuario = require('../services/usuario')
const servico = new ServicoUsuario()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require("../config.js")

class ControllerLogin{
    async Login(req, res){
        const { email, senha } = req.body;
    
        const { dataValues: Usuario } = await servico.PegarUmPorEmail(email);

        if (!Usuario) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }
        console.log(Usuario.senha, senha)
        if (!(await bcrypt.compare(senha, Usuario.senha))) {
            return res.status(401).json({ mensagem: 'Credenciais inválidas' });
        }

        const token = jwt.sign(
            { id: Usuario.id, nome: Usuario.nome, email: Usuario.email, permissao: Usuario.permissao},
            config.secret
        );
        
        res.json({ mensagem: 'Login bem-sucedido', token });
    }
}
module.exports = ControllerLogin