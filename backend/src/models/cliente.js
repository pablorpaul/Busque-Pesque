const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Usuario = require("../models/Usuario")

const Cliente = conexao.define('Cliente', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    usuarioId: {
        field: 'usuario_id',
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    }
}, {
    createdAt: false,
    updatedAt: false,
})

module.exports = Cliente