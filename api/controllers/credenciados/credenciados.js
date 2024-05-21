const {exeQuery} = require('../database/exeQuery')

async function adicionarCredenciado(
    nome, 
    cnpj,
    email,
    telefone,
    senha,
    cep,
    estado,
    cidade,
    bairro,
    logadouro,
    numero_logadouro,
    status
){
    const sql = `INSERT INTO CREDENCIADOS (NOME_CREDENCIADO, CNPJ, EMAIL, TELEFONE, SENHA, CEP, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, STATUS)
                VALUES ('${nome}', '${cnpj}', '${email}', '${telefone}', '${senha}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', ${status})`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }            
}

async function listarCredenciados(){
    const sql = `SELECT * FROM CREDENCIADOS`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function listarUnicoCredenciado(id){
    const sql = `SELECT * FROM CREDENCIADOS WHERE COD_CREDENCIADO = '${id}'`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function retornarEnderecoCredenciado(id){
    const sql = `SELECT CEP, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO
    FROM CREDENCIADOS 
    WHERE COD_CREDENCIADO = ${id};`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error
    }
}

async function listarUnicoCredenciado(id){
    const sql = `SELECT * FROM CREDENCIADOS WHERE COD_CREDENCIADO = '${id}';`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

module.exports = { 
    listarCredenciados,
    adicionarCredenciado, 
    listarUnicoCredenciado,
    retornarEnderecoCredenciado}


