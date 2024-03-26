const auth = require('../../model/databaseAuth')
const mysql = require('mysql2')
const { connect, endConnection } = require('./connect')

async function exeQuery(sql){
    const connection = await connect()

    try{
        return new Promise( (resolve, reject) => {
            connection.query(sql, (error, results, fields) => {
                if(error) {
                    console.error(error)
                    reject(error)
                    return
                }

                resolve(results)
            })
        })
    } finally {
        if(connection) await endConnection(connection)
    }

}

module.exports = {exeQuery}