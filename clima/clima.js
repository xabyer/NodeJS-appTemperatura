const axios = require('axios');

const getClima = async(lat, lon) => {
    const appid = '1d20d49058489bcf401380a12df03aa6';
    const units = 'metric';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const url = `${baseUrl}?lat=${lat}&lon=${lon}&appid=${appid}&units=${units}`

    const resp = await axios.get(url);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}