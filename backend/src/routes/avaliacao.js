const express = require("express")
const ControllerAvaliacao = require("../controllers/avaliacao.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerAvaliacao()
const router = express.Router()

router.get('/api/avaliacao/:id', authMiddleware, controller.PegarUmAvaliacao)
router.get('/api/avaliacao', authMiddleware, controller.PegarTodosAvaliacao)
router.post('/api/avaliacao', authMiddleware, controller.AddAvaliacao)
router.put('/api/avaliacao/:id', authMiddleware, controller.UpdateAvaliacao)
router.delete('/api/avaliacao/:id', authMiddleware, controller.DeletarAvaliacao)

module.exports = router