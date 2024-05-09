const {headers, url} = require('./AsaasConfg')
const axios = require('axios')

async function gerarCobrancaAsaas(customer, billingType, value, dueDate, description){

    try {
        const body = {
            customer: customer,
            billingType: billingType,
            value: value,
            dueDate: dueDate,
            descripion: description
        }

        const {data} = await axios.post(`${url}/payments`, body, {headers})
        return data
    } catch (error) {
        throw error
    }


}

module.exports = {gerarCobrancaAsaas}