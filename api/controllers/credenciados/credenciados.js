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
    status,
    walletId
){
    const sql = `INSERT INTO CREDENCIADOS (NOME_CREDENCIADO, CNPJ, EMAIL, TELEFONE, SENHA, CEP, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, STATUS, COD_ASAAS)
                VALUES ('${nome}', '${cnpj}', '${email}', '${telefone}', '${senha}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', ${status}, '${walletId}')`

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

async function validarCredenciado(email, senha){
    const sql = `SELECT * FROM CREDENCIADOS WHERE EMAIL = '${email}' AND SENHA = '${senha}'; `

    try {
        const response = await exeQuery(sql)
        if (response.length > 0){
            return { code: 200, data: response}
        } else {
            return {code: 400, data:response}
        }
    } catch (error) {
        throw error
    }
}

module.exports = { 
    listarCredenciados,
    adicionarCredenciado, 
    listarUnicoCredenciado,
    retornarEnderecoCredenciado,
    validarCredenciado
}


