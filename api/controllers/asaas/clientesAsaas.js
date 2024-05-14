const {headers, url} = require('./AsaasConfg')
const axios = require('axios')

async function adicionarClienteAsaas(nome, cpf, email, mobilePhone){

    const body = {
        name: nome,
        cpfCnpj: cpf,
        email: email,
        mobilePhone: mobilePhone,
    }

    try{
        const response = await axios.post(`${url}/customers`, body, {headers})
        return response.data
    }catch(error){
        throw error
    }

}


async function listarClientesAsaas(){

    try {
        const {data} = await axios.get(`${url}/customers`, {headers})
        return data
    } catch (error) {
        throw error        
    }

}


module.exports = {adicionarClienteAsaas, listarClientesAsaas}

