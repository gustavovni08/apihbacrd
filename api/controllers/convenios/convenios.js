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


module.exports = {
    getConvenios
} 