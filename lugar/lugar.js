const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const api_key = "65ec0a35ecc898f89f8b7ceae9ca9851";
    const url = "http://api.openweathermap.org/data/2.5/forecast";
    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `${ url }?q=${ encodeUlr }&appid=${ api_key }`,
        headers: { }
    });

    const resp = await instance.get();
    if (resp.data.list.length === 0 )
        throw new Error(`No hay resultados para ${ dir }`);

    const data = resp.data.list[0];
    const direccion = `${ resp.data.city.name }, ${ resp.data.city.country }`;
    const lat = resp.data.city.coord.lat;
    const lng = resp.data.city.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}