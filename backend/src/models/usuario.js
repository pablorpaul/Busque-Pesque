const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Cliente = require("../models/Cliente")
const Avaliacao = require("../models/avaliacao")

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
Cliente.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Avaliacao.belongsTo(Cliente, { foreignKey: 'id_usuario' });

module.exports = Usuario