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
    telefone,
    cod_asaas,
    convenio,
    vendedor,
    forma_pagamento,
    vencimento){

    const sql = `INSERT INTO ASSOCIADOS (NOME_ASSOCIADO, EMAIL, SENHA, CPF, ESTADO, CIDADE, BAIRRO, LOGADOURO, NUMERO_LOGADOURO, COMPLEMENTO, DATA_NASCIMENTO, STATUS, PLANO, TELEFONE, COD_ASAAS, CONVENIO, VENDEDOR, FORMA_PAGAMENTO, VENCIMENTO)
    VALUES ('${nome}', '${email}', '${senha}', '${cpf}', '${cep}', '${estado}', '${cidade}', '${bairro}', '${logadouro}', '${numero_logadouro}', '${data_nascimento}', ${status}, '${plano}', '${telefone}', '${cod_asaas}', '${convenio}', '${vendedor}', '${forma_pagamento}', '${vencimento}')`

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

async function validarAssociado(email, senha){
    const sql = `SELECT * FROM ASSOCIADOS WHERE EMAIL = '${email}' AND SENHA = '${senha}'; `

    try {
        const response = await exeQuery(sql)
        if (response.length > 0){
            return { code: 200, data: response}
        } else {
            return {code: 400}
        }
    } catch (error) {
        throw error
    }
}

async function listarUnicoAssociado(id){
    const sql = `SELECT * FROM ASSOCIADOS WHERE COD_ASSOCIADO = '${id}'`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }

}

async function listarUnicoAssociadoCodAsaas(id){
    const sql = `SELECT * FROM ASSOCIADOS WHERE COD_ASAAS = '${id}';`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}

async function ativarAssociado(id){
    const sql = `UPDATE ASSOCIADOS SET STATUS = '1' WHERE COD_ASSOCIADO = '${id}'`

    try {
        const response = await exeQuery(sql)
        return response
    } catch (error) {
        throw error        
    }
}





module.exports = {adicionarAssociado, listarAssociados, validarAssociado, listarUnicoAssociado, ativarAssociado, listarUnicoAssociadoCodAsaas}