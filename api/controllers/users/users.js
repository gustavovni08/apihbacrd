const {connect, endConnection} = require('../database/connect')

async function listarUsuarios(){
    const connection = await connect()
    try {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users', (error, results, fields) =>{
                if (error) {
                    console.error(error)
                    reject(error)
                    return
                }

                resolve(results)
            })
        })    
    } finally {
        if(connection){
            await endConnection(connection)
        }
    }
    
    // const connection = await connect()

    // connection.query('SELECT * FROM users', (error, results, fields) => {
    //     if (error) {
    //         console.error('Erro ao executar consulta:', error)
    //         return
    //     }
    //     const response = results
    //     return response
    // })

    // await endConnection(connection)
}

module.exports = {listarUsuarios}