const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Usuario = require("./Usuario")
const Estabelecimento = require("./Estabelecimento")

const Funcionario = sequelize.define('Funcionario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    estabelecimentoId: {
        field: 'estabelecimento_id',
        type: DataTypes.INTEGER,
        references: {
            model: Estabelecimento,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false,
})

Funcionario.belongsTo(Usuario, { foreignKey: 'usuario_id' })
Funcionario.belongsTo(Estabelecimento, { foreignKey: 'estabelecimento_id' })

module.exports = Funcionario