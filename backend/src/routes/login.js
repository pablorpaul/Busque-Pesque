const express = require("express")
const ControllerLogin = require("../controllers/login.js")


const controller = new ControllerLogin()
const router = express.Router()

router.post("/api/login", controller.Login)

module.exports = router