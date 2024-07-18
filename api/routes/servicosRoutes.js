const express = require('express')
const router = express.Router()
const { adicionarServico, listarServicos } = require('../controllers/servicos/servicos')

router.get('/listarServicos', async (req, res) => {
    try {
        const response = await listarServicos()
        console.log(response)
        res.status(200).json({message:'Lista de Serviço:', response:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'erro interno do servidor'})
    }
})

router.post('/adicionarServico', async (req, res) => {
    const {
        cod_credenciado,
        data,
        horarios,
        descricao,
        valor,
        tipo,
        split
    } = req.body

    try {
        await adicionarServico(
            cod_credenciado,
            data,
            horarios,
            descricao,
            valor,
            tipo,
            split
        )

        console.log('Servico adicionado com sucesso!')
        res.status(200).json({message:'Servico adicionado com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'erro interno do servidor'})
    }
})

module.exports = router