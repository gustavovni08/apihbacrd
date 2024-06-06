const {exeQuery} = require('../database/exeQuery')

async function listarMensalidades(){
    const sql = `SELECT * FROM MENSALIDADES`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}


async function inserirMensalidade(cod_associado, valor, descricao, vencimento){
    const sql = `INSERT INTO MENSALIDADES (COD_ASSOCIADO, VALOR, DESCRICAO, STATUS, VENCIMENTO) VALUES ('${cod_associado}','${valor}','${descricao}','AGUARDANDO_PAGAMENTO','${vencimento}');`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports={listarMensalidades, inserirMensalidade}