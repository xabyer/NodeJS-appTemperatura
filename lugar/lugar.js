const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let ciudad = encodeURI(direccion);




    const instance = axios.create({
        baseURL: `https://geocode.xyz/${ciudad}?json=1`
    });

    const resp = await instance.get();
    console.log(resp);
    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const mi_data = resp.data.alt.loc;
    const postal = mi_data.postal;
    const latitud = mi_data.latt;
    const longitud = mi_data.longt;
    const lugar = `${resp.data.standard.city}, ${resp.data.standard.countryname}`
    return {
        lugar,
        postal,
        latitud,
        longitud
    }
}

module.exports = {
    getLugarLatLng
}