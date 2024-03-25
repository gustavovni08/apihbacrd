const {exeQuery} = require('../database/exeQuery')

async function listarUsuarios(){
    const sql = `SELECT * FROM users`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports = {listarUsuarios}