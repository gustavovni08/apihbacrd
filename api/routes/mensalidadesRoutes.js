const express = require('express')
const { listarMensalidades, listarMensalidadesDeUmUnicoAssociado } = require('../controllers/mensalidades/mensalidades')
const router = express.Router()

router.get('/listarMensalidades', async (req, res) => {
    try {
        const response = await listarMensalidades()
        console.log(response)
        res.status(200).json({data:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
    }
})

router.get('/listarMensalidadesPorAssociado/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await listarMensalidadesDeUmUnicoAssociado(id)
        console.log(response)
        res.status(200).json({data:response})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor'})
    }

})

module.exports = router