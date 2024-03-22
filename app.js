const express = require('express')
const app = express()

const port = 3000

const { listarUsuarios } = require('./api/controllers/users/users')

app.get('/', (req, res) =>{
    console.log('hello world!')
    res.status(200).json({message:'hello wolrd!'})
})

app.get('/listarUsuarios', async (req, res) =>{
    try {
        const response = await listarUsuarios()
        console.log(response)
        res.status(200).json({message:'Dados da sua Consulta', data: response}) 
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Erro interno do servidor', error:error})
    }
    

})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
}) 