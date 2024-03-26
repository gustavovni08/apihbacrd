const {exeQuery} = require('../database/exeQuery')

async function adicionarAssociado(
    nome, 
    email, 
    senha, 
    cpf, 
    cep, 
    estado, 
    cidade, 
    bairro, 
    logadouro, 
    numero_logadouro, 
    data_nascimento, 
    status, 
    plano, 
    telefone){

    const sql = `INSERT INTO ASSOCIADOS (NOME_ASSOCIADO, EMAIL, SENHA, CPF, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, COMPLEMENTO, DATA_NASCIMENTO, STATUS, PLANO, TELEFONE)
    VALUES ('${nome}', '${email}', '${senha}', '${cpf}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', ${data_nascimento}, ${status}, '${plano}', '${telefone}')`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }

} 


async function listarAssociados(){
    const sql = `SELECT * FROM ASSOCIADOS`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports = {adicionarAssociado, listarAssociados}