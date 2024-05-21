const {exeQuery} = require('../database/exeQuery')

async function inserirNovaCobranca( cod_agendamento, cod_mensalidade, tipo, status, descricao, link, valor, cod_pagamento){

    const sql = `INSERT INTO COBRANCAS (COD_AGENDAMENTO, COD_MENSALIDADES, TIPO, STATUS, DESCRICAO, LINK, VALOR, COD_PAGAMENTO) 
    VALUES (${cod_agendamento}, ${cod_mensalidade}, '${tipo}', '${status}', '${descricao}', '${link}', ${valor}, '${cod_pagamento}')`

    try {
        const response = await exeQuery(sql)
        return response        
    } catch (error) {
        throw error
    }

}

async function listarUnicaCobrancaDeAgendamento(id){
    const sql = `SELECT * FROM COBRANCAS WHERE COD_AGENDAMENTO = ${id}`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}


async function listarUnicaCobrancaDeMensalidade(id){
    const sql = `SELECT * FROM COBRANCAS WHERE COD_MENSALIDADE = ${id}`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function confirmarPagamento(id){
    const sql = `UPDATE COBRANCAS SET STATUS = 'PAGAMENTO_CONFIRMADO' WHERE COD_PAGAMENTO = '${id}';`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function listarPagamentoPorId(id){
    const sql = `SELECT * FROM COBRANCAS WHERE COD_PAGAMENTO = '${id}';`
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports = {
    inserirNovaCobranca,
    listarUnicaCobrancaDeAgendamento,
    listarUnicaCobrancaDeMensalidade,
    listarPagamentoPorId,
    confirmarPagamento
}