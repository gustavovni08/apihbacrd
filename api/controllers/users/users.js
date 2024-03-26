//const {connect, endConnection} = require('../database/connect')
const {exeQuery} = require('../database/exeQuery')


async function listarUsuarios(){
    const sql = `SELECT * FROM users`
    
    try{
        const response = await exeQuery(sql)
        return response
    } catch (error){
        throw error
    }
}

async function adicionarUsuario(email, senha){
    const sql = `INSERT INTO users (user_email, user_password) VALUES ('${email}', '${senha}')`
    
    try{
        const response = await exeQuery(sql)
        return response 
    } catch (error){
        console.error(error)
        throw error
    }
}

async function autenticarUsuario(email, senha){
    const sql = `SELECT user_email, user_password FROM users WHERE user_email = '${email}' AND user_password = '${senha}'`

    try{
        const [rows] = await exeQuery(sql)

        if(rows === undefined){
            return { cod: 401 }
        } else {
            return { cod: 200, data: rows}
        }
    } catch (error) {
        throw error
    }
}

module.exports = {listarUsuarios, adicionarUsuario, autenticarUsuario}