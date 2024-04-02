const express = require('express')
const router = express.Router()
const { adicionarAssociado, listarAssociados, validarAssociado } = require('../controllers/associados/associados')

router.post('/adicionarAssociado', async (req, res) => {
    try {
        const { nome, 
                email, 
                senha, 
                cpf, 
                cep, 
                estado, 
                cidade, 
                bairro, 
                logadouro, 
                numero_logadouro, 
                data_nascimento, 
                status, 
                plano, 
                telefone} = req.body

        await adicionarAssociado(nome, email, senha, cpf, cep, estado, cidade, bairro, logadouro, numero_logadouro, data_nascimento, status, plano, telefone)
        console.log('associado adicionado com sucesso!')
        res.status(200).json({message:'associado adicionado com sucesso!'})

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Error interno do servidor'})
    }
})

router.get('/listarAssociados', async (req, res) => {
    try {
        const response = await listarAssociados()
        console.log(response)
        res.status(200).json({message: 'lista de associados:', response:response})

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Error interno do servidor'})
    }
})

router.post('/validarAssociado', async (req, res) => {
    
    const {email, senha} = req.body
    
    try{
        const response = await validarAssociado(email, senha)
        
        if(response.code === 200){
            console.log(response)
            res.status(200).json({message:'Associado autenticado!', response: response})
        } 

        if(response.code === 400){
            console.log(response)
            res.status(400).json({message:'Email ou Senha Inválidos'})
        } 

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Error interno do servidor'})
    }
})
module.exports = router