const { retornarEnderecoCredenciado } = require('../credenciados/credenciados')
const {exeQuery} = require('../database/exeQuery')

async function listarAgendamentos(){
    const sql = `SELECT * FROM AGENDAMENTOS`
    
    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function adicionarAgendamento(
                                    cod_associado, 
                                    cod_credenciado, 
                                    cod_servico, 
                                    valor, 
                                    data, 
                                    hora,
                                    descricao){
    const endereco = await retornarEnderecoCredenciado(cod_credenciado)
    
    const cep = endereco[0].CEP
    const estado = endereco[0].ESTADO
    const cidade = endereco[0].CIDADE
    const bairro = endereco[0].BAIRRO
    const logadouro = endereco[0].LOGADOURO
    const numero_logadouro = endereco[0].NUMERO_LOGADOURO

     const sql = `INSERT INTO AGENDAMENTOS 
     (COD_ASSOCIADO, COD_CREDENCIADO, COD_SERVICO, VALOR, CEP, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, DATA, HORA, DESCRICAO) 
     VALUES 
     ( '${cod_associado}', '${cod_credenciado}', '${cod_servico}', '${valor}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', '${data}', '${hora}', '${descricao}');`
    
    try {
        await exeQuery(sql)
        return        
    } catch (error) {
        throw error
    }
}

async function listarAgendamentosPorId(id){
    const sql = `SELECT * FROM AGENDAMENTOS WHERE COD_ASSOCIADO= ${id}`

    try {
        const response = exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }

}

module.exports = { listarAgendamentos, adicionarAgendamento, listarAgendamentosPorId}