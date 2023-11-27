const express = require("express")
const ControllerUsuario = require("../controllers/usuario.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerUsuario()
const router = express.Router()

router.get('/api/usuario/:id', authMiddleware, controller.PegarUmUsuario)
router.get('/api/usuarios', authMiddleware, controller.PegarTodosUsuario)
router.post('/api/usuario', authMiddleware, controller.AddUsuario)
router.put('/api/usuario/:id', authMiddleware, controller.UpdateUsuario)
router.delete('/api/usuario/:id', authMiddleware, controller.DeletarUsuario)

module.exports = router