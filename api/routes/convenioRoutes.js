const express = require('express')
const router = express.Router()
const {getConvenios} = require('../controllers/convenios/convenios')

router.get('/convenios', async (req, res) => {
    
    try {
        const response = await getConvenios()
        console.log(response)
        res.status(200).json({message:'convenios', response:response})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({message:'Erro interno do servidor'})
    }


})

module.exports = router