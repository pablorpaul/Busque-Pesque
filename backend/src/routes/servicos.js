const express = require("express")
const ControllerServico = require("../controllers/funcionario.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerServico()
const router = express.Router()

router.get('/api/servico/:id', authMiddleware, controller.PegarUmServico)
router.get('/api/servico', authMiddleware, controller.PegarTodosServico)
router.post('/api/servico', authMiddleware, controller.AddServico)
router.put('/api/servico/:id', authMiddleware, controller.UpdateServico)
router.delete('/api/servico/:id', authMiddleware, controller.DeletarServico)

module.exports = router