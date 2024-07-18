const express = require('express')
const router = express.Router()
const { adicionarCredenciado, listarCredenciados, retornarEnderecoCredenciado, listarUnicoCredenciado } = require('../controllers/credenciados/credenciados')

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
        status,
        walletId

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
            status,
            walletId
        )

        console.log('Credenciado adicionado com sucesso!')
        res.status(200).json({message:'Credenciado adicionado com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
    }
})

router.get('/listarUnicoCredenciado/:id', async (req, res) => {
    const {id} = req.params

    try{
    const response = await listarUnicoCredenciado(id)
    res.status(200).json({message:'credenciado:', response:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
    }
})

router.get('/retornarEnderecoCredenciado', async (req, res) => {
    
    const {id} = req.body
    
    try {
        const response = await retornarEnderecoCredenciado(id)
        console.log(response)
        res.status(200).json({message:'endereço do credenciado', response:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
        
    }
})

router.get('/listarUnicoCredenciado/:id', async (req, res) => {
    const {id} = req.params

    try {
        const response = await listarUnicoCredenciado(id)
        console.log(response)
        res.status(200).json({message:'Credenciado:', response:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'erro interno do servidor'})   
    }

})

module.exports = router