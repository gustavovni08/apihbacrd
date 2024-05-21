const express = require('express')
const { gerarCobrancaAsaas } = require('../controllers/asaas/cobrancaAsaas')
const { listarClientesAsaas } = require('../controllers/asaas/clientesAsaas')
const { confirmarPagamento, listarPagamentoPorId } = require('../controllers/cobrancas/cobrancas')
const { confirmarAgendamento } = require('../controllers/agendamentos/agendamentos')
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

router.post('/pagamentoEfetuado', async (req, res) => {
    const {payment} = req.body
    console.log(payment)

    try {
        const cobranca = await listarPagamentoPorId(payment.id)
        console.log(cobranca)
        console.log('cobranca mapeada com sucesso!')

        if(cobranca[0].COD_MENSALIDADES == null){
            await confirmarAgendamento(cobranca[0].COD_AGENDAMENTO)
            console.log('agendamento confirmado com sucesso!')
        }
        
        await confirmarPagamento(payment.id)
        console.log('pagamento tratado com sucesso!')
        res.status(200).json({messsage:'pagamento tratado com sucesso'})
    
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})
    }

    
})



module.exports = router