const {exeQuery} = require('../database/exeQuery')

async function getConvenios(){
    const sql = 'SELECT * FROM convenios'

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error
    }
}


async function postConvenios(nome, link){

    const sql = `INSERT INTO convenios (nome, link) VALUES ('${nome}', '${link}')`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error
    }

}

module.exports = {
    getConvenios,
    postConvenios
} 