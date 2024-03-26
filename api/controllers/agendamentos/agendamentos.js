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
                                    hora){
    
    const { cep, 
            estado, 
            cidade, 
            bairro, 
            logadouro, 
            numero_logadouro, 
            complemento,} = await retornarEnderecoCredenciado(cod_credenciado)
                                        
    const sql = `INSERT INTO AGENDAMENTOS 
    (COD_ASSOCIADO, COD_CREDENCIADO, COD_SERVICO, VALOR, CEP, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, COMPLEMENTO, DATA, HORA) 
    VALUES 
    ( '${cod_associado}', '${cod_credenciado}', '${cod_servico}', '${valor}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', '${complemento}', ${data}, '${hora}');`
}