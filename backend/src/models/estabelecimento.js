const { DataTypes } = require('sequelize')
const sequelize = require('../database.js')
const Usuario = require("../models/Usuario")
const Avaliacao = require("../models/avaliacao")
const Servico = require("../models/servicos")

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
});

Avaliacao.belongsTo(Estabelecimento, { foreignKey: 'id_estabelecimento' });
Servico.belongsTo(Estabelecimento, { foreignKey: 'id_estabelecimento' });
Estabelecimento.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Estabelecimento