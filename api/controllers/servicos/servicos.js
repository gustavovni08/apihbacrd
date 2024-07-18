const {exeQuery} = require('../database/exeQuery')

async function adicionarServico(codigo_credenciado, data, horarios, descricao, valor, tipo, split){
    const sql = `INSERT INTO SERVICOS (CODIGO_CREDENCIADO, DATA, HORARIOS, DESCRICAO, VALOR, TIPO, SPLIT) 
                 VALUES ('${codigo_credenciado}', '${data}', '${horarios}', '${descricao}', ${valor}, '${tipo}', ${split});`

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