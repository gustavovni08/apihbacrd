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

async function listarCobrancaPorCodigo(id, tipo){
    
}

module.exports = {inserirNovaCobranca}