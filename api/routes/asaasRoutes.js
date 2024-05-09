const express = require('express')
const { gerarCobrancaAsaas } = require('../controllers/asaas/cobrancaAsaas')
const { listarClientesAsaas } = require('../controllers/asaas/clientesAsaas')
const router = express.Router()

router.post('/gerarCobrancaAsaas', async (req, res) => {
    try {
        const {
            customer, billingType, value, dueDate, description
        } = req.body
        const response = await gerarCobrancaAsaas(customer, billingType, value, dueDate, description)
        console.log(response)
        res.status(200).json({message:'cobranca inserida com sucesso'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})
    }
})

router.get('/listarClientes', async (req, res) => {
    const data = await listarClientesAsaas()
    console.log(data)
})



module.exports = router