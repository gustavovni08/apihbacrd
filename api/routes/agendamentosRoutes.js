const express = require('express')
const router = express.Router()
const { adicionarAgendamento, listarAgendamentos, listarAgendamentosPorId, listarAgendamentosAtivosPorId, listarAgendamentosConfirmados, retornarMaiorCodigoAgendamento } = require('../controllers/agendamentos/agendamentos')

router.post('/adicionarAgendamento', async (req, res) =>{
    const {
        cod_associado,
        cod_credenciado,
        cod_servico,
        valor,
        data,
        hora,
        descricao,
        status
    } = req.body

    try {
        await adicionarAgendamento(
            cod_associado,
            cod_credenciado,
            cod_servico,
            valor,
            data,
            hora,
            descricao,
            status)


        console.log('Agendamento inserido com sucesso!')
        res.status(200).json({message:'Agendamento inserido com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error.message})
    }
})

router.get('/listarAgendamentos', async (req, res) => {
    
    try {
        const response = await listarAgendamentos()
        console.log(response)
        res.status(200).json({message:'lista de agendamentos:', response:response})
    } catch(error){
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error.message})
    }
})

router.get('/listarAgendamentosPorId', async (req, res) => {
    const {id} = req.query

    try{
        const response = await listarAgendamentosPorId(id)
        console.log(response)
        res.status(200).json({message:'lista de agendamento', response:response})
    }catch(error){
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error.message})
    }

})

router.get('/listarAgendamentosAtivosPorId', async (req, res) => {
    const {id} = req.query

    try{
        const response = await listarAgendamentosAtivosPorId(id)
        console.log(response)
        res.status(200).json({message:'lista de agendamento', response:response})
    }catch(error){
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error.message})
    }

})


router.get('/listarAgendamentosConfirmados/:id', async (req,res) =>{

    const {id} = req.params

    try{
        const response = await listarAgendamentosConfirmados(id)
        console.log(response)
        res.status(200).json({message:'lista de agendamentos confirmados', response:response})
    }catch(error){
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error.message})
    }

})

router.get('/listarMaiorCodigoAgendamento', async (req, res) => {
    try {
        const response = await retornarMaiorCodigoAgendamento()
        console.log(response)
        res.status(200).json({message:'maior agendamento', response:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error})        
    }
})


module.exports = router
