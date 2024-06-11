const express = require('express')
const { gerarCobrancaAsaas } = require('../controllers/asaas/cobrancaAsaas')
const { listarClientesAsaas } = require('../controllers/asaas/clientesAsaas')
const { confirmarPagamento, listarPagamentoPorId, confirmarAdesao, inserirNovaCobranca } = require('../controllers/cobrancas/cobrancas')
const { confirmarAgendamento } = require('../controllers/agendamentos/agendamentos')
const { listarUnicoAssociado, ativarAssociado, listarUnicoAssociadoCodAsaas } = require('../controllers/associados/associados')
const { gerarAssinaturaAsaas } = require('../controllers/asaas/AssinaturasAsaas')
const { inserirMensalidade, retornarMaiorCodMensalidade, confirmarMensalidade } = require('../controllers/mensalidades/mensalidades')
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

        if(cobranca[0].TIPO === 'AGENDAMENTO'){
            await confirmarAgendamento(cobranca[0].COD_AGENDAMENTO)
            console.log('agendamento confirmado com sucesso!')
        }

        if(cobranca[0].TIPO === 'ADESAO'){
            const associado = await listarUnicoAssociado(cobranca[0].COD_ASSOCIADO)
            await confirmarAdesao(cobranca[0].COD_COBRANCA)
            await ativarAssociado(associado[0].COD_ASSOCIADO)
            await gerarAssinaturaAsaas(associado[0].COD_ASAAS, cobranca[0].MODO_PAGAMENTO, cobranca[0].VALOR/2, cobranca[0].DESCRICAO)

        }

        if(cobranca[0].TIPO === 'MENSALIDADE'){
            await confirmarMensalidade(cobranca[0].COD_MENSALIDADES)
        }
        
        await confirmarPagamento(payment.id)
        console.log('pagamento tratado com sucesso!')
        res.status(200).json({messsage:'pagamento tratado com sucesso'})
    
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})
    }

    
})

router.post('/cobrancaGerada', async (req, res) => {
    const {payment} = req.body
    console.log(payment)
    try {
        if(payment.subscription){
            const associado = await listarUnicoAssociadoCodAsaas(payment.customer)
            await inserirMensalidade(associado[0].COD_ASSOCIADO, payment.value, 'MENSALIDADE HBCARD', payment.dueDate, payment.invoiceUrl)
            var cod_mensalidade = await retornarMaiorCodMensalidade()
            await inserirNovaCobranca(null, cod_mensalidade[0]['MAIOR_COD_MENSALIDADE'], associado[0].COD_ASSOCIADO, 'MENSALIDADE', 'AGUARDANDO_PAGAMENTO', 'MENSALIDADE HBCARD', payment.invoiceUrl, payment.value, payment.id, payment.billingType)
            res.status(200).json({message:'cobranca registrada com sucesso!'})    
        }else{
            res.status(200).json({message:'cobranca registrada com sucesso!'})    
        }
  
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})
    }
    
})

router.get('/listarPagamentoPorId/:id', async (req, res) =>{
    const {id} = req.params
    console.log(id)

    try {
        const response = await listarPagamentoPorId(id)
        console.log(response)
        res.status(200).json({message:'cobranca do id:', data:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})
    }
})



module.exports = router