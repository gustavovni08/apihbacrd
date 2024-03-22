const auth = require('../../model/databaseAuth')
const mysql = require('mysql2')

async function connect(){
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(auth)
        connection.connect((error) => {
            if (error) {
                console.error(error)
                reject(error)
                return
            }
            console.log('Conexão com banco de dados bem sucedida!')
            resolve(connection)
        })
    })
}

async function endConnection(connection){
    return new Promise((resolve, reject) =>{
        connection.end((error) => {
            if (error) {
                console.error(error)
                reject(error)
                return
            }

            console.log('conexão encerrada com sucesso')
            resolve()
        })
    })

    
}

module.exports = {connect, endConnection}