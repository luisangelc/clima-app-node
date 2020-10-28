const axios = require('axios');

const getClima = async (lat, lng) => {
    const api_key = "65ec0a35ecc898f89f8b7ceae9ca9851";
    const url = 'https://api.openweathermap.org/data/2.5/weather?';
    const resp = await axios.get(`${ url }lat=${ lat }&lon=${ lng }&appid=${ api_key }&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}