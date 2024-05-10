const {exeQuery} = require('../database/exeQuery')

async function inserirNovaCobranca( cod_agendamento, cod_mensalidade, tipo, status, descricao, link, valor){

    const sql = `INSERT INTO COBRANCAS (COD_AGENDAMENTO, COD_MENSALIDADES, TIPO, STATUS, DESCRICAO, LINK, VALOR) 
    VALUES (${cod_agendamento}, ${cod_mensalidade}, '${tipo}', '${status}', '${descricao}', '${link}', ${valor})`

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

module.exports = {
    inserirNovaCobranca,
    listarUnicaCobrancaDeAgendamento,
    listarUnicaCobrancaDeMensalidade
}