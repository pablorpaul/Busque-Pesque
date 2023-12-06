const express = require("express")
const ControllerFuncionario = require("../controllers/funcionario.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerFuncionario()
const router = express.Router()

router.get('/api/funcionario/:id', authMiddleware, controller.PegarUmFuncionario)
router.get('/api/funcionario', authMiddleware, controller.PegarTodosFuncionario)
router.post('/api/funcionario', authMiddleware, controller.AddFuncionario)
router.put('/api/funcionario/:id', authMiddleware, controller.UpdateFuncionario)
router.delete('/api/funcionario/:id', authMiddleware, controller.DeletarFuncionario)

module.exports = router