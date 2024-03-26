const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const cors = require('cors')
app.use(cors())

const port = 3000

const { listarUsuarios, adicionarUsuario, autenticarUsuario } = require('./api/controllers/users/users')

app.get('/', (req, res) => {
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


app.post('/adicionarUsuario', async (req, res) => {
    
    const {email, password} = req.body

    try {
        await adicionarUsuario(email, password)
        console.log('Usuario adicionado com sucesso!')
        res.status(200).json({message:'Usuario adicionado com sucesso!'})
    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error})
    }
})


app.post('/autenticarUsuario', async (req, res) => {
    
    const {email, password} = req.body

    try {
        const response = await autenticarUsuario(email, password)

        if(response.cod === 401){
            console.log(response)
            console.log('Email ou Senha inválidos')
            res.status(401).json({message:'Email ou Senha inválidos', response: response})
        } 

        if(response.cod === 200){
            console.log(response)
            console.log('Usuário autenticado com sucesso!')
            res.status(200).json({message:'Usuário autenticado com sucesso!', response: response})
        } 

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'Erro interno do servidor', error:error})
    }
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
}) 