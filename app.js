const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 3000

const associados = require('./api/routes/associadosRoutes')
app.use(associados)

const credenciados = require('./api/routes/credenciadosRoutes')
app.use(credenciados)

const servicos = require('./api/routes/servicosRoutes')
app.use(servicos)

const agendamentos = require('./api/routes/agendamentosRoutes')
app.use(agendamentos)

app.get('/', (req, res) => {
    console.log('hello world!')
    res.status(200).json({message:'hello wolrd!'})
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
}) 