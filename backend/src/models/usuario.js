const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Cliente = require("../models/cliente")
const Avaliacao = require("../models/avaliacao")
const Funcionario = require("../models/funcionario")

const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    permissao: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false,
})



module.exports = Usuario