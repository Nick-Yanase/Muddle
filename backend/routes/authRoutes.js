const express = require("express")
const {register, login} = require("../controllers/authController")
const router = express.Router()

// /register e /login: Ativam as funções register e login no controlador de autenticação.
router.post("/register", register)
router.post("/login", login)

module.exports = router;