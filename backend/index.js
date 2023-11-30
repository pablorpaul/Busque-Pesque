const express = require('express')

const RouterCliente = require('./src/routes/cliente.js')
const RouterUsuario = require('./src/routes/usuario.js')
const RouterLogin = require('./src/routes/login.js')
const RouterEstabelecimento = require('./src/routes/estabelecimento.js')

const app = express()
const port = 3000


app.use(express.json())
app.use(RouterCliente)
app.use(RouterUsuario)
app.use(RouterLogin)
app.use(RouterEstabelecimento)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})