const express = require('express')
const router = express.Router()
const { adicionarCredenciado, listarCredenciados } = require('../controllers/credenciados/credenciados')

router.get('/listarCredenciados', async (req, res) => {
    try {
        const response = await listarCredenciados()
        console.log(response)
        res.status(200).json({message:'Lista de Credenciados:', response:response})
    } catch (error) {
        console.error(error)
        throw error
    }
})

router.post('/adicionarCredenciado', async (req, res) =>{
    const {
        nome,
        cnpj,
        email,
        telefone,
        senha,
        cep,
        estado,
        cidade,
        bairro,
        logadouro,
        numero_logadouro,
        status

    } = req.body

    try {
         await adicionarCredenciado(
            nome,
            cnpj,
            email,
            telefone,
            senha,
            cep,
            estado,
            cidade,
            bairro,
            logadouro,
            numero_logadouro,
            status
        )

        console.log('Credenciado adicionado com sucesso!')
        res.status(200).json({message:'Credenciado adicionado com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
    }
})

module.exports = router