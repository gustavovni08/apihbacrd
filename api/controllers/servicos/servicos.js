const {exeQuery} = require('../database/exeQuery')

async function adicionarServico(codigo_credenciado, data, horarios, descricao, valor, tipo){
    const sql = `INSERT INTO SERVICOS (CODIGO_CREDENCIADO, DATA, HORARIOS, DESCRICAO, VALOR, TIPO) 
                 VALUES ('${codigo_credenciado}', '${data}', '${horarios}', '${descricao}', ${valor}, '${tipo}');`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function listarServicos(){
    
    const sql = `SELECT * FROM SERVICOS;`
    
    try {
        const response = exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}


module.exports = {adicionarServico, listarServicos}