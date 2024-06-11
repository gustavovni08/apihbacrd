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


async function inserirMensalidade(cod_associado, valor, descricao, vencimento, link){
    const sql = `INSERT INTO MENSALIDADES (COD_ASSOCIADO, VALOR, DESCRICAO, STATUS, VENCIMENTO, LINK) VALUES ('${cod_associado}','${valor}','${descricao}','AGUARDANDO_PAGAMENTO','${vencimento}', '${link}');`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function listarUnicaMensalidade(id){
    const sql = `SELECT * FROM MENSALIDADES WHERE COD_MENSALIDADE = ${id}`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function retornarMaiorCodMensalidade(){
    const sql = `SELECT MAX(COD_MENSALIDADE) AS MAIOR_COD_MENSALIDADE FROM MENSALIDADES;`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }

}

async function listarMensalidadesDeUmUnicoAssociado(id){
    const sql = `SELECT * FROM MENSALIDADES WHERE COD_ASSOCIADO = ${id}`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }

}

async function confirmarMensalidade(id){
    const sql = `UPDATE MENSALIDADES SET STATUS = 'PAGO' WHERE COD_MENSALIDADE = '${id}'`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports={listarMensalidades, inserirMensalidade, retornarMaiorCodMensalidade, listarMensalidadesDeUmUnicoAssociado, listarUnicaMensalidade, confirmarMensalidade}