const {headers, url} = require('./AsaasConfg')
const axios = require('axios')

async function gerarCobrancaAsaas(customer, billingType, value, dueDate, description, walletId, fixedValue){

    try {
        const body = {
            customer: customer,
            billingType: billingType,
            value: value,
            dueDate: dueDate,
            descripion: description,
            split: [
                {
                    walletId: walletId,
                    fixedValue: fixedValue,
                }

            ]
        }

        const {data} = await axios.post(`${url}/payments`, body, {headers})
        return data
    } catch (error) {
        console.log(error)
        throw error
    }


}

module.exports = {gerarCobrancaAsaas}