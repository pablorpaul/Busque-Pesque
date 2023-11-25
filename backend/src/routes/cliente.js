const express = require("express")
const ControllerCliente = require("../controllers/cliente.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerCliente()
const router = express.Router()

router.get('/api/cliente/:id', authMiddleware, controller.PegarUmCliente)
router.get('/api/clientes', authMiddleware, controller.PegarTodosCliente)
router.post('/api/cliente', controller.AddCliente)
router.put('/api/cliente/:id', authMiddleware, controller.UpdateCliente)
router.delete('/api/cliente/:id', authMiddleware, controller.DeletarCliente)

module.exports = router