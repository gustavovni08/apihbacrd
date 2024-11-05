const express = require('express')
const path = require('path')
const app = express()

const cors = require('cors')
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./api/swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

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

const cobrancas = require('./api/routes/cobrancasRoutes')
app.use(cobrancas)

const mensalidades = require('./api/routes/mensalidadesRoutes')
app.use(mensalidades)

const asaas = require('./api/routes/asaasRoutes')
app.use(asaas)

const convenios = require('./api/routes/convenioRoutes')
app.use(convenios)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.get('/', (req, res) => {
    console.log('hello world!')
    res.status(200).json({message:'hello wolrd!'})
})


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
}) 