const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Cliente = require("../models/Cliente")
const Estabelecimento = require("../models/Estabelecimento")

const Avaliacao = sequelize.define('Avaliacoes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    comentario: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nota: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: false,
    },
    clienteId: {
        field: 'cliente_id',
        type: DataTypes.INTEGER,
        references: {
            model: Cliente,
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
});


module.exports = Avaliacao