const express = require("express")
const ControllerEstabelecimento = require("../controllers/estabelecimento.js")
const authMiddleware = require("../middleware/auth")

const controller = new ControllerEstabelecimento()
const router = express.Router()

router.get('/api/estabelecimento/:id', controller.PegarUmEstabelecimento)
router.get('/api/estabelecimento', controller.PegarTodosEstabelecimento)
router.post('/api/estabelecimento', controller.AddEstabelecimento)
router.put('/api/estabelecimento/:id', authMiddleware, controller.UpdateEstabelecimento)
router.delete('/api/estabelecimento/:id', authMiddleware, controller.DeletarEstabelecimento)

module.exports = router