const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    access_token: process.env.API_KEY_ASAAS
}

const url = 'https://sandbox.asaas.com/api/v3/'

//const url = 'https://api.asaas.com/v3'

module.exports = {headers, url}