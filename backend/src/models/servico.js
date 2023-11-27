const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Estabelecimento = require("./Estabelecimento")

const Servico = sequelize.define('Servico', {
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
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
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
});

module.exports = Servico