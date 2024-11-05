const express = require('express')
const router = express.Router()
const {getConvenios, postConvenios} = require('../controllers/convenios/convenios')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../uploads'))
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage })

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

router.post('/convenios', upload.single('imagem'), async (req, res) => {
    try {
        const { nome } = req.body
        const imagemPath = req.file ? `/uploads/${req.file.filename}` : null
        const link = `https://api.hbcard.com.br/uploads/${req.file ? req.file.filename : nome}`

        if (!nome || !imagemPath) {
            return res.status(400).json({ error: 'Nome e imagem são obrigatórios.' })
        }
    
        await postConvenios(nome, link)

        res.status(201).json({ message: 'Convênio adicionado com sucesso!' })

    } catch (error) {
        console.error('Erro ao adicionar convênio:', error)
        res.status(500).json({ error: 'Erro interno no servidor.' })
    }
})

module.exports = router