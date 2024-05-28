const {exeQuery} = require('../database/exeQuery')

async function inserirNovaCobranca( cod_agendamento, cod_mensalidade, cod_associado, tipo, status, descricao, link, valor, cod_pagamento, modo_pagamento){

    const sql = `INSERT INTO COBRANCAS (COD_AGENDAMENTO, COD_MENSALIDADES, TIPO, STATUS, DESCRICAO, LINK, VALOR, COD_PAGAMENTO, COD_ASSOCIADO, MODO_PAGAMENTO) 
    VALUES (${cod_agendamento}, ${cod_mensalidade}, '${tipo}', '${status}', '${descricao}', '${link}', ${valor}, '${cod_pagamento}', '${cod_associado}', '${modo_pagamento}')`

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

async function listarUnicaCobrancaDeAdesao(id){
    const sql = `SELECT * FROM COBRANCAS WHERE TIPO = 'ADESAO' AND COD_ASSOCIADO = '${id}'`

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

async function confirmarAdesao(id){
    const sql = `UPDATE COBRANCAS SET STATUS = 'PAGAMENTO_CONFIRMADO' WHERE COD_PAGAMENTO = '${id}'`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports = {
    inserirNovaCobranca,
    listarUnicaCobrancaDeAdesao,
    listarUnicaCobrancaDeAgendamento,
    listarUnicaCobrancaDeMensalidade,
    listarPagamentoPorId,
    confirmarPagamento,
    confirmarAdesao
}