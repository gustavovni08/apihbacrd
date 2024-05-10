const { gerarCobrancaAsaas } = require("../controllers/asaas/cobrancaAsaas")
const { inserirNovaCobranca, listarUnicaCobrancaDeAgendamento } = require("../controllers/cobrancas/cobrancas")

const express = require('express')
const router = express.Router()

router.post('/inserirCobranca', async( req, res ) => {
    const { cod_agendamento, 
            cod_mensalidade, 
            tipo, 
            status, 
            descricao, 
            valor,
            codigo_asaas,
            billingType,
            dueDate
        
        } = req.body

        try {
            const billingAsaas = await gerarCobrancaAsaas(codigo_asaas, billingType, valor, dueDate, descricao)
            console.log(billingAsaas)
            
            if(billingAsaas){
                const cobranca = await inserirNovaCobranca(cod_agendamento, cod_mensalidade, tipo, status, descricao, billingAsaas.invoiceUrl, valor)
                res.status(200).json({mensage: 'cobranca inserida com sucesso'})
            } else{
                res.status(500).json({message:'erro no asaas'})
            }
        } catch (error) {
            console.error(error.message)
            res.status(500).json({message:'Erro interno do servidor'})
        }

    
})

router.get('/listarCobrancaDeAgendamento/:id', async (req, res) => {
    
    const {id} = req.params
    
    try {
        const response = await listarUnicaCobrancaDeAgendamento(id)
        console.log(response)
        res.status(200).json({message:'cobranca de agendamento', response:response})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:'Erro interno do servidor'})

    }
})

module.exports = router