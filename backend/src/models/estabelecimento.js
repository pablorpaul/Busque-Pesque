const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Usuario = require("../models/Usuario")
const Avaliacao = require("../models/avaliacao")
const Servico = require("./servico")
const Funcionario = require("./funcionario")

const Estabelecimento = sequelize.define('Estabelecimento', {
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
    contato: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    createdAt: false,
    updatedAt: false,
});

Servico.belongsTo(Estabelecimento, { foreignKey: 'servico_id' });



module.exports = Estabelecimento