const {headers, url} = require('./AsaasConfg')
const axios = require('axios')

async function gerarAssinaturaAsaas(cod_asaas, billingType, valor, descricao){

    const body = {
        billingType: billingType,
        cycle: 'MONTHKY',
        value: valor,
        customer: cod_asaas,
        description: descricao,
        nextDueDate: proximoDiaNoProximoMes()
    }

    try {
        await axios.post(`${url}subscriptions`, body, {headers})
        return response.data
    } catch (error) {
        throw error
    }

}

function proximoDiaNoProximoMes() {
    const hoje = new Date();
    const proximoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, hoje.getDate());
    return proximoMes.getFullYear() + '-' + ('0' + (proximoMes.getMonth() + 1)).slice(-2) + '-' + ('0' + proximoMes.getDate()).slice(-2);
}


module.exports = {gerarAssinaturaAsaas}